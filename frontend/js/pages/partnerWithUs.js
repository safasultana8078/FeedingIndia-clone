// Base URL of the local backend. Change this if you deploy the backend
// somewhere else (e.g. Render/Railway) instead of running it locally.
const API_BASE = 'http://localhost:5000';

let state = {
  partnerType: 'corporate',
  orgName: '',
  contactName: '',
  email: '',
  phone: '',
  message: '',
};
let errors = {};
let isSubmitting = false;
let submitted = false;
let serverError = '';

function resetState() {
  state = {
    partnerType: 'corporate',
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  };
  errors = {};
  isSubmitting = false;
}

function validate() {
  const tempErrors = {};
  if (!state.contactName.trim()) tempErrors.contactName = 'Contact Name is required';
  if (state.partnerType !== 'individual' && !state.orgName.trim()) {
    tempErrors.orgName = 'Organization Name is required';
  }
  if (!state.email) {
    tempErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    tempErrors.email = 'Email format is invalid';
  }
  if (!state.phone) {
    tempErrors.phone = 'Phone number is required';
  } else if (!/^[0-9]{10}$/.test(state.phone)) {
    tempErrors.phone = 'Enter a valid 10-digit mobile number';
  }
  if (!state.message.trim()) tempErrors.message = 'Please share details about how you wish to collaborate';

  errors = tempErrors;
  return Object.keys(tempErrors).length === 0;
}

function errorSpan(field) {
  return errors[field] ? `<span class="form-error">${errors[field]}</span>` : '';
}
function errCls(field) {
  return errors[field] ? 'error' : '';
}

export const PartnerWithUsPage = {
  render() {
    return `
    <div class="partner-page animate-fade">

      <section class="subpage-hero">
        <div class="contain">
          <span class="section-label">Collaboration</span>
          <h1 class="subpage-title">Partner with us</h1>
          <p class="subpage-subtitle">
            Whether you want to invest CSR capital, integrate school programs, or volunteer on the ground—we build custom partnerships for maximum impact.
          </p>
        </div>
      </section>

      <section class="form-section section-padding">
        <div class="contain form-grid">
          <div class="form-info-panel">
            <h2>Why Partner with Feeding India?</h2>
            <p>
              We bring operational scale, robust digital tracking systems, and complete transparency to all our projects.
            </p>

            <div class="info-points-list">
              <div class="info-point"><strong>80G Tax Exemptions:</strong> All eligible sponsorships receive 50% tax deductions.</div>
              <div class="info-point"><strong>Real-time Impact Reports:</strong> Get digital audit logs showing meal delivery confirmations.</div>
              <div class="info-point"><strong>Scale & Access:</strong> Access to government daycares and learning shelters in 160+ cities.</div>
            </div>

            <div class="support-card-bubble">
              <p>For urgent questions or CSR queries, reach out at:</p>
              <a href="mailto:partnerships@feedingindia.org">partnerships@feedingindia.org</a>
            </div>
          </div>

          <div class="form-wrapper-box" id="partner-form-wrapper">
            ${this.renderFormArea()}
          </div>
        </div>
      </section>

    </div>
    `;
  },

  renderFormArea() {
    if (submitted) {
      return `
        <div class="success-panel text-center">
          <div class="success-icon-wrapper">
            <div class="checkmark-circle"><div class="checkmark-draw"></div></div>
          </div>
          <h3>Thank you for reaching out!</h3>
          <p>
            Our partnership team has received your details and will get back to you within 24 to 48 business hours.
          </p>
          <button type="button" class="btn btn-primary" id="partner-send-another">
            Send another request
          </button>
        </div>
      `;
    }

    return `
      <form id="partner-form" class="partner-form" novalidate>
        <div class="form-group">
          <label class="form-label">I want to partner as a:</label>
          <div class="radio-tabs-group">
            <label class="radio-tab ${state.partnerType === 'corporate' ? 'selected' : ''}">
              <input type="radio" name="partnerType" value="corporate" ${state.partnerType === 'corporate' ? 'checked' : ''} />
              Corporate / CSR
            </label>
            <label class="radio-tab ${state.partnerType === 'school' ? 'selected' : ''}">
              <input type="radio" name="partnerType" value="school" ${state.partnerType === 'school' ? 'checked' : ''} />
              School / Centre
            </label>
            <label class="radio-tab ${state.partnerType === 'individual' ? 'selected' : ''}">
              <input type="radio" name="partnerType" value="individual" ${state.partnerType === 'individual' ? 'checked' : ''} />
              Volunteer
            </label>
          </div>
        </div>

        ${state.partnerType !== 'individual' ? `
        <div class="form-group">
          <label class="form-label" for="orgName">Organization / School Name</label>
          <input type="text" id="orgName" name="orgName" class="form-control ${errCls('orgName')}" placeholder="e.g., Eternal Enterprises Ltd" value="${state.orgName}" />
          ${errorSpan('orgName')}
        </div>` : ''}

        <div class="form-group">
          <label class="form-label" for="contactName">Contact Name</label>
          <input type="text" id="contactName" name="contactName" class="form-control ${errCls('contactName')}" placeholder="e.g., Aarav Sharma" value="${state.contactName}" />
          ${errorSpan('contactName')}
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="email">Email Address</label>
            <input type="email" id="email" name="email" class="form-control ${errCls('email')}" placeholder="e.g., aarav@company.com" value="${state.email}" />
            ${errorSpan('email')}
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" class="form-control ${errCls('phone')}" placeholder="e.g., 9876543210" value="${state.phone}" />
            ${errorSpan('phone')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="message">Collaboration details</label>
          <textarea id="message" name="message" rows="4" class="form-control ${errCls('message')}" placeholder="Share how you would like to work with us (e.g., locations, funding size, volunteering details...)">${state.message}</textarea>
          ${errorSpan('message')}
        </div>

        ${serverError ? `<p class="form-error" style="margin-bottom:12px">${serverError}</p>` : ''}

        <button type="submit" class="btn btn-primary w-full" ${isSubmitting ? 'disabled' : ''}>
          ${isSubmitting ? 'Sending Request...' : 'Submit Partnership Query'}
        </button>
      </form>
    `;
  },

  refreshFormArea() {
    const wrapper = document.getElementById('partner-form-wrapper');
    if (wrapper) {
      wrapper.innerHTML = this.renderFormArea();
      this.bindFormEvents();
    }
  },

  bindFormEvents() {
    const wrapper = document.getElementById('partner-form-wrapper');
    if (!wrapper) return;

    const form = document.getElementById('partner-form');
    if (form) {
      // radio tabs
      form.querySelectorAll('input[name="partnerType"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
          state.partnerType = e.target.value;
          this.refreshFormArea();
        });
      });

      // text inputs
      ['orgName', 'contactName', 'email', 'phone', 'message'].forEach((field) => {
        const el = form.elements[field];
        if (!el) return;
        el.addEventListener('input', (e) => {
          state[field] = e.target.value;
          if (errors[field]) {
            errors[field] = '';
            // Only clear the error visuals without a full re-render so the
            // user doesn't lose focus while typing.
            e.target.classList.remove('error');
            const errEl = e.target.parentElement.querySelector('.form-error');
            if (errEl) errEl.remove();
          }
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validate()) {
          this.refreshFormArea();
          return;
        }

        isSubmitting = true;
        serverError = '';
        this.refreshFormArea();

        try {
          const res = await fetch(`${API_BASE}/api/partner`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
          });

          const data = await res.json();

          if (!res.ok) {
            errors = data.errors || {};
            serverError = data.message || 'Please fix the highlighted fields and try again.';
            isSubmitting = false;
            this.refreshFormArea();
            return;
          }

          isSubmitting = false;
          submitted = true;
          resetState();
          this.refreshFormArea();
        } catch (err) {
          isSubmitting = false;
          serverError = 'Could not reach the server. Is the backend running on localhost:5000?';
          this.refreshFormArea();
        }
      });
    }

    const sendAnotherBtn = document.getElementById('partner-send-another');
    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', () => {
        submitted = false;
        this.refreshFormArea();
      });
    }
  },

  mount() {
    this.bindFormEvents();
  },

  unmount() {
    // Reset transient UI state (but not entered data) when navigating away
    submitted = false;
    isSubmitting = false;
    serverError = '';
  },
};
