import React, { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [requireTaxCert, setRequireTaxCert] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(1000);

  // Meal cost math: ₹10 per meal
  const calculateMeals = (val) => {
    return Math.floor(val / 10);
  };

  const handlePresetClick = (val) => {
    setSelectedPreset(val);
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    if (val === '' || /^[0-9\b]+$/.test(val)) {
      setCustomAmount(val);
      setSelectedPreset(null);
      setAmount(val === '' ? 0 : parseInt(val));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    
    // Email Validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }

    // Phone Validation
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // Tax PAN validation
    if (requireTaxCert) {
      if (!formData.pan) {
        tempErrors.pan = "PAN Number is required for tax deduction claim";
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan.toUpperCase())) {
        tempErrors.pan = "Enter a valid PAN format (e.g. ABCDE1234F)";
      }
    }

    if (amount < 100) {
      tempErrors.amount = "Minimum donation amount is ₹100";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsProcessing(true);
      // Simulate Payment gateway processing
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentComplete(true);
      }, 3000);
    }
  };

  const handleReset = () => {
    setPaymentComplete(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      pan: '',
      address: ''
    });
    setAmount(1000);
    setSelectedPreset(1000);
    setCustomAmount('');
  };

  return (
    <div className="donate-page animate-fade">
      
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Support Us</span>
          <h1 className="subpage-title">Together, we can end hunger</h1>
          <p className="subpage-subtitle">
            Every contribution directly funds the preparation and delivery of clean, fresh, and nutritious meals to children.
          </p>
        </div>
      </section>

      {/* Donation Grid */}
      <section className="donation-form-section section-padding">
        <div className="contain form-grid">
          
          {/* Left panel: Impact Calculator */}
          <div className="donation-impact-panel">
            <h2>Your Impact</h2>
            <p>
              Admin and operational costs of Feeding India Foundation are supported by corporate patrons (including Zomato), meaning 100% of your donation buys child nutrition.
            </p>

            <div className="impact-calculator-box">
              <span className="calculator-header">Nourishment Calculator</span>
              <div className="meals-highlight">
                <span className="meals-number">{calculateMeals(amount)}</span>
                <span className="meals-text">nutritious meals funded</span>
              </div>
              <p className="meals-description">
                Your donation of <strong>₹{amount || 0}</strong> will provide daily hot lunches to feed a child in school for <strong>{calculateMeals(amount)} days</strong>.
              </p>
            </div>

            <div className="faq-short-box">
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <h5>Is my donation tax-exempt?</h5>
                <p>Yes, all donations are 50% tax exempt under Section 80G of the Indian Income Tax Act.</p>
              </div>
              <div className="faq-item">
                <h5>How do you track meals?</h5>
                <p>We use Facials Recognition (FRAT) and digital attendance tablets at schools to verify that kids receive meals.</p>
              </div>
            </div>
          </div>

          {/* Right panel: Form and presets */}
          <div className="form-wrapper-box">
            {paymentComplete ? (
              <div className="success-panel text-center">
                <div className="success-icon-wrapper">
                  <div className="checkmark-circle">
                    <div className="checkmark-draw"></div>
                  </div>
                </div>
                <h3>Donation Successful!</h3>
                <p className="success-msg-main">
                  Thank you for donating <strong>₹{amount}</strong>! You have funded <strong>{calculateMeals(amount)} nutritious meals</strong>.
                </p>
                <div className="receipt-details">
                  <p><strong>Transaction ID:</strong> FI-{Math.floor(100000 + Math.random() * 900000)}</p>
                  {requireTaxCert && (
                    <p>An 80G tax exemption certificate will be sent to <strong>{formData.email}</strong> within 15 days of transaction reconciliation.</p>
                  )}
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleReset}
                >
                  Make another donation
                </button>
              </div>
            ) : (
              <form onSubmit={handlePaySubmit} className="donate-form">
                
                {/* 1. Preset amount selection */}
                <div className="form-group">
                  <label className="form-label">Choose donation amount (INR)</label>
                  <div className="presets-row">
                    {[500, 1000, 2500].map(val => (
                      <button
                        key={val}
                        type="button"
                        className={`preset-btn ${selectedPreset === val ? 'selected' : ''}`}
                        onClick={() => handlePresetClick(val)}
                      >
                        ₹ {val}
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom Amount input */}
                  <div className="custom-amount-wrapper">
                    <span className="currency-prefix">₹</span>
                    <input
                      type="text"
                      className={`form-control custom-amount-input ${errors.amount ? 'error' : ''}`}
                      placeholder="Enter custom amount (e.g. 5000)"
                      value={customAmount}
                      onChange={handleCustomChange}
                    />
                  </div>
                  {errors.amount && <span className="form-error">{errors.amount}</span>}
                </div>

                {/* 2. Donor details */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name (as in PAN)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'error' : ''}`}
                    placeholder="e.g., Ananya Sen"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      placeholder="e.g., ananya@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Mobile Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      placeholder="e.g., 9988776655"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                {/* 3. Tax exemption toggle */}
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={requireTaxCert}
                      onChange={(e) => setRequireTaxCert(e.target.checked)}
                    />
                    I require an 80G tax exemption certificate
                  </label>
                </div>

                {/* Conditional PAN card field */}
                {requireTaxCert && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="pan">PAN Card Number</label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      className={`form-control ${errors.pan ? 'error' : ''}`}
                      placeholder="e.g., ABCDE1234F"
                      value={formData.pan}
                      onChange={handleInputChange}
                      style={{ textTransform: 'uppercase' }}
                    />
                    {errors.pan && <span className="form-error">{errors.pan}</span>}
                  </div>
                )}

                {/* 4. Action Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Connecting to Payment Gateway...' : `Proceed to Pay ₹${amount || 0}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mock Payment Processing Overlay Modal */}
      {isProcessing && (
        <div className="payment-processing-overlay">
          <div className="processing-card text-center">
            <div className="loader-ring"></div>
            <h3>Securing Connection</h3>
            <p>Please do not refresh this page or press back. We are validating donor details and initializing the gateway.</p>
          </div>
        </div>
      )}

    </div>
  );
}
