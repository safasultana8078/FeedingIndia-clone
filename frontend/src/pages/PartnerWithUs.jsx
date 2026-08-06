import React, { useState } from 'react';

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    partnerType: 'corporate',
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.contactName.trim()) tempErrors.contactName = "Contact Name is required";
    if (formData.partnerType !== 'individual' && !formData.orgName.trim()) {
      tempErrors.orgName = "Organization Name is required";
    }
    
    // Email Validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }

    // Phone Validation (simple 10 digit check)
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) tempErrors.message = "Please share details about how you wish to collaborate";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          partnerType: 'corporate',
          orgName: '',
          contactName: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 2000);
    }
  };

  return (
    <div className="partner-page animate-fade">
      
      {/* Hero Banner */}
      <section className="subpage-hero">
        <div className="contain">
          <span className="section-label">Collaboration</span>
          <h1 className="subpage-title">Partner with us</h1>
          <p className="subpage-subtitle">
            Whether you want to invest CSR capital, integrate school programs, or volunteer on the ground—we build custom partnerships for maximum impact.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="form-section section-padding">
        <div className="contain form-grid">
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
                <strong>Scale & Access:</strong> Access to government daycares and learning shelters in 160+ cities.
              </div>
            </div>

            <div className="support-card-bubble">
              <p>For urgent questions or CSR queries, reach out at:</p>
              <a href="mailto:partnerships@feedingindia.org">partnerships@feedingindia.org</a>
            </div>
          </div>

          <div className="form-wrapper-box">
            {submitted ? (
              <div className="success-panel text-center">
                <div className="success-icon-wrapper">
                  <div className="checkmark-circle">
                    <div className="checkmark-draw"></div>
                  </div>
                </div>
                <h3>Thank you for reaching out!</h3>
                <p>
                  Our partnership team has received your details and will get back to you within 24 to 48 business hours.
                </p>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="partner-form">
                
                {/* Partner Type Selector */}
                <div className="form-group">
                  <label className="form-label">I want to partner as a:</label>
                  <div className="radio-tabs-group">
                    <label className={`radio-tab ${formData.partnerType === 'corporate' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="partnerType" 
                        value="corporate"
                        checked={formData.partnerType === 'corporate'}
                        onChange={handleInputChange}
                      />
                      Corporate / CSR
                    </label>
                    
                    <label className={`radio-tab ${formData.partnerType === 'school' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="partnerType" 
                        value="school"
                        checked={formData.partnerType === 'school'}
                        onChange={handleInputChange}
                      />
                      School / Centre
                    </label>

                    <label className={`radio-tab ${formData.partnerType === 'individual' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="partnerType" 
                        value="individual"
                        checked={formData.partnerType === 'individual'}
                        onChange={handleInputChange}
                      />
                      Volunteer
                    </label>
                  </div>
                </div>

                {/* Organization name (conditional) */}
                {formData.partnerType !== 'individual' && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="orgName">Organization / School Name</label>
                    <input 
                      type="text" 
                      id="orgName"
                      name="orgName" 
                      className={`form-control ${errors.orgName ? 'error' : ''}`}
                      placeholder="e.g., Eternal Enterprises Ltd"
                      value={formData.orgName}
                      onChange={handleInputChange}
                    />
                    {errors.orgName && <span className="form-error">{errors.orgName}</span>}
                  </div>
                )}

                {/* Contact Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">Contact Name</label>
                  <input 
                    type="text" 
                    id="contactName"
                    name="contactName" 
                    className={`form-control ${errors.contactName ? 'error' : ''}`}
                    placeholder="e.g., Aarav Sharma"
                    value={formData.contactName}
                    onChange={handleInputChange}
                  />
                  {errors.contactName && <span className="form-error">{errors.contactName}</span>}
                </div>

                {/* Grid Group Email/Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      placeholder="e.g., aarav@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      placeholder="e.g., 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Collaboration details</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="4"
                    className={`form-control ${errors.message ? 'error' : ''}`}
                    placeholder="Share how you would like to work with us (e.g., locations, funding size, volunteering details...)"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Partnership Query'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
