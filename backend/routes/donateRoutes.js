const express = require('express');
const Donation = require('../models/Donation');

const router = express.Router();

function generateTransactionId() {
  return `FI-${Math.floor(100000 + Math.random() * 900000)}`;
}

// POST /api/donate
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, amount, requireTaxCert, pan } = req.body;

    // --- Basic server-side validation (never trust the client) ---
    const errors = {};
    if (!name || !name.trim()) errors.name = 'Full Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = 'A valid email is required';
    if (!phone || !/^[0-9]{10}$/.test(phone)) errors.phone = 'A valid 10-digit phone number is required';

    const amountNum = Number(amount);
    if (!amountNum || amountNum < 100) errors.amount = 'Minimum donation amount is \u20B9100';

    if (requireTaxCert) {
      if (!pan || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(String(pan).toUpperCase())) {
        errors.pan = 'A valid PAN is required for a tax exemption certificate';
      }
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const donation = await Donation.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone,
      amount: amountNum,
      mealsFunded: Math.floor(amountNum / 10),
      requireTaxCert: Boolean(requireTaxCert),
      pan: requireTaxCert ? String(pan).toUpperCase() : undefined,
      transactionId: generateTransactionId(),
    });

    return res.status(201).json({ success: true, donation });
  } catch (err) {
    console.error('Error saving donation:', err);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;
