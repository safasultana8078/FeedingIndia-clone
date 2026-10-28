function defaultState() {
  return {
    amount: 1000,
    customAmount: '',
    requireTaxCert: true,
    selectedPreset: 1000,
    formData: { name: '', email: '', phone: '', pan: '', address: '' },
  };
}

// Base URL of the local backend. Change this if you deploy the backend
// somewhere else (e.g. Render/Railway) instead of running it locally.
const API_BASE = 'http://localhost:5000';

let state = defaultState();
let errors = {};
let isProcessing = false;
let paymentComplete = false;
let lastDonationResult = null; // holds { transactionId, ... } from the server after a successful save
let serverError = '';

function calculateMeals(val) {
  return Math.floor(val / 10);
}

function validate() {
  const tempErrors = {};
  if (!state.formData.name.trim()) tempErrors.name = 'Full Name is required';

  if (!state.formData.email) {
    tempErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(state.formData.email)) {
    tempErrors.email = 'Email format is invalid';
  }

  if (!state.formData.phone) {
    tempErrors.phone = 'Phone number is required';
  } else if (!/^[0-9]{10}$/.test(state.formData.phone)) {
    tempErrors.phone = 'Enter a valid 10-digit mobile number';
  }

  if (state.requireTaxCert) {
    if (!state.formData.pan) {
      tempErrors.pan = 'PAN Number is required for tax deduction claim';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(state.formData.pan.toUpperCase())) {
      tempErrors.pan = 'Enter a valid PAN format (e.g. ABCDE1234F)';
    }
  }

  if (state.amount < 100) {
    tempErrors.amount = 'Minimum donation amount is \u20B9100';
  }

  errors = tempErrors;
  return Object.keys(tempErrors).length === 0;
}

function errorSpan(field) {
  return errors[field] ? `<span class="form-error">${errors[field]}</span>` : '';
}
function errCls(field) {
  return errors[field] ? 'error' : '';
}

export const DonatePage = {
  render() {
    return `
    <div class="donate-page animate-fade">

      <section class="subpage-hero">
        <div class="contain">
          <span class="section-label">Support Us</span>
          <h1 class="subpage-title">Together, we can end hunger</h1>
          <p class="subpage-subtitle">
            Every contribution directly funds the preparation and delivery of clean, fresh, and nutritious meals to children.
          </p>
        </div>
      </section>

      <section class="donation-form-section section-padding">
        <div class="contain form-grid">

          <div class="donation-impact-panel">
            <h2>Your Impact</h2>
            <p>
              Admin and operational costs of Feeding India Foundation are supported by corporate patrons (including Zomato), meaning 100% of your donation buys child nutrition.
            </p>

            <div class="impact-calculator-box">
              <span class="calculator-header">Nourishment Calculator</span>
              <div class="meals-highlight">
                <span class="meals-number" id="donate-meals-number">${calculateMeals(state.amount)}</span>
                <span class="meals-text">nutritious meals funded</span>
              </div>
              <p class="meals-description" id="donate-meals-description">
                Your donation of <strong>\u20B9${state.amount || 0}</strong> will provide daily hot lunches to feed a child in school for <strong>${calculateMeals(state.amount)} days</strong>.
              </p>
            </div>

            <div class="faq-short-box">
              <h4>Frequently Asked Questions</h4>
              <div class="faq-item">
                <h5>Is my donation tax-exempt?</h5>
                <p>Yes, all donations are 50% tax exempt under Section 80G of the Indian Income Tax Act.</p>
              </div>
              <div class="faq-item">
                <h5>How do you track meals?</h5>
                <p>We use Facials Recognition (FRAT) and digital attendance tablets at schools to verify that kids receive meals.</p>
              </div>
            </div>
          </div>

          <div class="form-wrapper-box" id="donate-form-wrapper">
            ${this.renderFormArea()}
          </div>
        </div>
      </section>

      <div class="payment-processing-overlay" id="donate-processing-overlay" ${isProcessing ? '' : 'hidden'}>
        <div class="processing-card text-center">
          <div class="loader-ring"></div>
          <h3>Securing Connection</h3>
          <p>Please do not refresh this page or press back. We are validating donor details and initializing the gateway.</p>
        </div>
      </div>

    </div>
    `;
  },

  renderFormArea() {
    if (paymentComplete) {
      return `
        <div class="success-panel text-center">
          <div class="success-icon-wrapper">
            <div class="checkmark-circle"><div class="checkmark-draw"></div></div>
          </div>
          <h3>Donation Successful!</h3>
          <p class="success-msg-main">
            Thank you for donating <strong>\u20B9${state.amount}</strong>! You have funded <strong>${calculateMeals(state.amount)} nutritious meals</strong>.
          </p>
          <div class="receipt-details">
            <p><strong>Transaction ID:</strong> ${lastDonationResult ? lastDonationResult.transactionId : 'N/A'}</p>
            ${state.requireTaxCert ? `<p>An 80G tax exemption certificate will be sent to <strong>${state.formData.email}</strong> within 15 days of transaction reconciliation.</p>` : ''}
          </div>
          <button type="button" class="btn btn-primary" id="donate-make-another">
            Make another donation
          </button>
        </div>
      `;
    }

    return `
      <form id="donate-form" class="donate-form" novalidate>

        <div class="form-group">
          <label class="form-label">Choose donation amount (INR)</label>
          <div class="presets-row">
            ${[500, 1000, 2500].map((val) => `
              <button type="button" class="preset-btn ${state.selectedPreset === val ? 'selected' : ''}" data-preset="${val}">
                \u20B9 ${val}
              </button>
            `).join('')}
          </div>

          <div class="custom-amount-wrapper">
            <span class="currency-prefix">\u20B9</span>
            <input type="text" id="customAmount" class="form-control custom-amount-input ${errCls('amount')}" placeholder="Enter custom amount (e.g. 5000)" value="${state.customAmount}" />
          </div>
          ${errorSpan('amount')}
        </div>

        <div class="form-group">
          <label class="form-label" for="name">Full Name (as in PAN)</label>
          <input type="text" id="name" name="name" class="form-control ${errCls('name')}" placeholder="e.g., Ananya Sen" value="${state.formData.name}" />
          ${errorSpan('name')}
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="email">Email Address</label>
            <input type="email" id="email" name="email" class="form-control ${errCls('email')}" placeholder="e.g., ananya@gmail.com" value="${state.formData.email}" />
            ${errorSpan('email')}
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Mobile Number</label>
            <input type="tel" id="phone" name="phone" class="form-control ${errCls('phone')}" placeholder="e.g., 9988776655" value="${state.formData.phone}" />
            ${errorSpan('phone')}
          </div>
        </div>

        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" id="requireTaxCert" ${state.requireTaxCert ? 'checked' : ''} />
            I require an 80G tax exemption certificate
          </label>
        </div>

        ${state.requireTaxCert ? `
        <div class="form-group">
          <label class="form-label" for="pan">PAN Card Number</label>
          <input type="text" id="pan" name="pan" class="form-control ${errCls('pan')}" placeholder="e.g., ABCDE1234F" value="${state.formData.pan}" style="text-transform:uppercase" />
          ${errorSpan('pan')}
        </div>` : ''}

        ${serverError ? `<p class="form-error" style="margin-bottom:12px">${serverError}</p>` : ''}

        <button type="submit" class="btn btn-primary w-full" ${isProcessing ? 'disabled' : ''}>
          ${isProcessing ? 'Connecting to Payment Gateway...' : `Proceed to Pay \u20B9${state.amount || 0}`}
        </button>
      </form>
    `;
  },

  updateImpactPanel() {
    const numberEl = document.getElementById('donate-meals-number');
    const descEl = document.getElementById('donate-meals-description');
    if (numberEl) numberEl.textContent = calculateMeals(state.amount);
    if (descEl) {
      descEl.innerHTML = `Your donation of <strong>\u20B9${state.amount || 0}</strong> will provide daily hot lunches to feed a child in school for <strong>${calculateMeals(state.amount)} days</strong>.`;
    }
  },

  refreshFormArea() {
    const wrapper = document.getElementById('donate-form-wrapper');
    if (wrapper) {
      wrapper.innerHTML = this.renderFormArea();
      this.bindFormEvents();
    }
    this.updateImpactPanel();
  },

  toggleOverlay(show) {
    const overlay = document.getElementById('donate-processing-overlay');
    if (overlay) overlay.hidden = !show;
  },

  bindFormEvents() {
    const wrapper = document.getElementById('donate-form-wrapper');
    if (!wrapper) return;

    // Preset amount buttons
    wrapper.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.preset, 10);
        state.selectedPreset = val;
        state.amount = val;
        state.customAmount = '';
        if (errors.amount) errors.amount = '';
        this.refreshFormArea();
      });
    });

    // Custom amount input
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) {
      customAmountInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val === '' || /^[0-9\b]+$/.test(val)) {
          state.customAmount = val;
          state.selectedPreset = null;
          state.amount = val === '' ? 0 : parseInt(val, 10);
          this.updateImpactPanel();
          // update presets highlight + submit button label without full re-render
          wrapper.querySelectorAll('.preset-btn').forEach((b) => b.classList.remove('selected'));
          const submitBtn = wrapper.querySelector('button[type="submit"]');
          if (submitBtn && !isProcessing) submitBtn.textContent = `Proceed to Pay \u20B9${state.amount || 0}`;
        } else {
          e.target.value = state.customAmount;
        }
      });
    }

    const form = document.getElementById('donate-form');
    if (form) {
      ['name', 'email', 'phone', 'pan'].forEach((field) => {
        const el = form.elements[field];
        if (!el) return;
        el.addEventListener('input', (e) => {
          state.formData[field] = e.target.value;
          if (errors[field]) {
            errors[field] = '';
            e.target.classList.remove('error');
            const errEl = e.target.parentElement.querySelector('.form-error');
            if (errEl) errEl.remove();
          }
        });
      });

      const taxCertCheckbox = document.getElementById('requireTaxCert');
      if (taxCertCheckbox) {
        taxCertCheckbox.addEventListener('change', (e) => {
          state.requireTaxCert = e.target.checked;
          this.refreshFormArea();
        });
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validate()) {
          this.refreshFormArea();
          return;
        }

        isProcessing = true;
        serverError = '';
        this.refreshFormArea();
        this.toggleOverlay(true);

        try {
          const res = await fetch(`${API_BASE}/api/donate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: state.formData.name,
              email: state.formData.email,
              phone: state.formData.phone,
              amount: state.amount,
              requireTaxCert: state.requireTaxCert,
              pan: state.formData.pan,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            // Server-side validation failed, or something else went wrong.
            errors = data.errors || {};
            serverError = data.message || 'Please fix the highlighted fields and try again.';
            isProcessing = false;
            this.toggleOverlay(false);
            this.refreshFormArea();
            return;
          }

          lastDonationResult = data.donation;
          isProcessing = false;
          paymentComplete = true;
          this.toggleOverlay(false);
          this.refreshFormArea();
        } catch (err) {
          isProcessing = false;
          serverError = 'Could not reach the server. Is the backend running on localhost:5000?';
          this.toggleOverlay(false);
          this.refreshFormArea();
        }
      });
    }

    const makeAnotherBtn = document.getElementById('donate-make-another');
    if (makeAnotherBtn) {
      makeAnotherBtn.addEventListener('click', () => {
        paymentComplete = false;
        state = defaultState();
        errors = {};
        lastDonationResult = null;
        serverError = '';
        this.refreshFormArea();
      });
    }
  },

  mount() {
    this.bindFormEvents();
  },

  unmount() {
    paymentComplete = false;
    isProcessing = false;
    serverError = '';
  },
};
