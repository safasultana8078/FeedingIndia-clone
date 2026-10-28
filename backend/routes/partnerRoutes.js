const express = require('express');
const Partner = require('../models/Partner');

const router = express.Router();

// POST /api/partner
router.post('/', async (req, res) => {
  try {
    const { partnerType, orgName, contactName, email, phone, message } = req.body;

    const errors = {};
    if (!['corporate', 'school', 'individual'].includes(partnerType)) {
      errors.partnerType = 'Invalid partner type';
    }
    if (partnerType !== 'individual' && (!orgName || !orgName.trim())) {
      errors.orgName = 'Organization Name is required';
    }
    if (!contactName || !contactName.trim()) errors.contactName = 'Contact Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = 'A valid email is required';
    if (!phone || !/^[0-9]{10}$/.test(phone)) errors.phone = 'A valid 10-digit phone number is required';
    if (!message || !message.trim()) errors.message = 'Please share collaboration details';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const partner = await Partner.create({
      partnerType,
      orgName: orgName ? orgName.trim() : undefined,
      contactName: contactName.trim(),
      email: email.trim().toLowerCase(),
      phone,
      message: message.trim(),
    });

    return res.status(201).json({ success: true, partner });
  } catch (err) {
    console.error('Error saving partner request:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;
