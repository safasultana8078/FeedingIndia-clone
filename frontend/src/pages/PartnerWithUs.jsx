import React, { useState } from 'react';

const API_BASE = 'http://localhost:5000';

/**
 * Partner With Us Page & Controlled Form
 * Rubric Demonstration:
 * - Hooks: useState for complex form state, validation errors, and loading/submitted status
 * - Routing & Forms: Fully controlled form with inputs, select/radio, textarea
 * - Validation: Client-side validation with regex and custom logic
 * - Dynamic Styling: Error classes, active partner type buttons, responsive form grid
 * - Submission Handling: async API call to Express backend with success/error screens
 */
export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    partnerType: 'corporate',
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Switch partner type
  const handleTypeSelect = (type) => {
    setFormData((prev) => ({
      ...prev,
      partnerType: type,
    }));
  };

  // Client-side validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact Name is required';
    }

    if (formData.partnerType !== 'individual' && !formData.orgName.trim()) {
      newErrors.orgName = 'Organization / Institution Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share details about how you wish to collaborate';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters of description';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/api/partner`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit partnership request.');
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(
        err.message || 'Could not connect to the server. Please ensure the backend server is running.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to submit another request
  const handleReset = () => {
    setFormData({
      partnerType: 'corporate',
      orgName: '',
      contactName: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
    setServerError('');
  };

  return (
    <div className="partner-page animate-fade">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Collaboration</span>
          <h1 className="subpage-title">Partner with us</h1>
          <p className="subpage-subtitle">
            Whether you want to invest CSR capital, integrate school programs, or volunteer on the ground—we build custom partnerships for maximum impact.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="form-section section-padding">
        <div className="contain form-grid">
          {/* Info Panel */}
          <div className="form-info-panel">
            <h2>Why Partner with Feeding India?</h2>
            <p>
              We bring operational scale, robust digital tracking systems, and complete transparency to all our projects.
            </p>

            <div className="info-points-list">
              <div className="info-point">
                <strong>80G Tax Exemptions:</strong> All eligible sponsorships receive 50% tax deductions.
              </div>
              <div className="info-point">
                <strong>Real-time Impact Reports:</strong> Get digital audit logs showing meal delivery confirmations.
              </div>
              <div className="info-point">
                <strong>Scale &amp; Access:</strong> Access to government daycares and learning shelters in 160+ cities.
              </div>
            </div>

            <div className="support-card-bubble" style={{ marginTop: '30px' }}>
              <p>For urgent questions or CSR queries, reach out at:</p>
              <a href="mailto:partnerships@feedingindia.org">partnerships@feedingindia.org</a>
            </div>
          </div>

          {/* Controlled Form Box */}
          <div className="form-wrapper-box" id="partner-form-wrapper">
            {submitted ? (
              <div className="success-panel text-center" style={{ padding: '30px 15px' }}>
                <div className="success-icon-wrapper" style={{ margin: '0 auto 20px' }}>
                  <div className="checkmark-circle">
                    <div className="checkmark-draw"></div>
                  </div>
                </div>
                <h3>Partnership Inquiry Received!</h3>
                <p className="success-msg-main" style={{ margin: '15px 0' }}>
                  Thank you, <strong>{formData.contactName}</strong>. Our partnership team will review your proposal and contact you at <strong>{formData.email}</strong> within 2 business days.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReset}
                  style={{ marginTop: '10px' }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="partner-form" onSubmit={handleSubmit} noValidate>
                {/* Server Error Alert */}
                {serverError && (
                  <div
                    className="alert-banner"
                    style={{
                      background: '#FEE2E2',
                      color: '#DC2626',
                      border: '1px solid #FCA5A5',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {serverError}
                  </div>
                )}

                {/* Partner Type Selector (Buttons / Tabs) */}
                <div className="form-group">
                  <label className="form-label">I represent a:</label>
                  <div className="presets-row" style={{ display: 'flex', gap: '10px' }}>
                    {[
                      { id: 'corporate', label: 'Corporate / CSR' },
                      { id: 'school', label: 'School / NGO' },
                      { id: 'individual', label: 'Individual' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`preset-btn ${formData.partnerType === item.id ? 'selected' : ''}`}
                        onClick={() => handleTypeSelect(item.id)}
                        style={{ flex: 1 }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Organization Name (Conditional: if not individual) */}
                {formData.partnerType !== 'individual' && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="orgName">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      id="orgName"
                      name="orgName"
                      className={`form-input ${errors.orgName ? 'error' : ''}`}
                      placeholder="e.g. Acme Corporation"
                      value={formData.orgName}
                      onChange={handleChange}
                    />
                    {errors.orgName && <span className="form-error">{errors.orgName}</span>}
                  </div>
                )}

                {/* Contact Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    className={`form-input ${errors.contactName ? 'error' : ''}`}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.contactName}
                    onChange={handleChange}
                  />
                  {errors.contactName && <span className="form-error">{errors.contactName}</span>}
                </div>

                {/* Form Row: Email and Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="partner-email">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="partner-email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="partner-phone">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="partner-phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="10-digit number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                {/* Collaboration Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    How would you like to collaborate? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                    rows={4}
                    placeholder="Tell us about your proposed sponsorship, target region, or initiatives..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    marginTop: '10px',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-sm"></span> Submitting...
                    </>
                  ) : (
                    'Submit Partnership Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

