const express = require('express');
const mongoose = require('mongoose');
const Donation = require('../models/Donation');
const Partner = require('../models/Partner');

const router = express.Router();

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

// Very basic protection: not real authentication, just a shared-password
// gate so the admin data isn't wide open to anyone who finds the URL.
// Good enough for local/personal use; replace with real auth before
// putting this anywhere public.
function requireAdminPassword(req, res, next) {
  const provided = req.header('x-admin-password');
  if (!provided || provided !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
}

router.use(requireAdminPassword);

// GET /api/admin/donations
router.get('/donations', async (_req, res) => {
  const donations = await Donation.find().sort({ createdAt: -1 });
  res.json({ success: true, donations });
});

// GET /api/admin/partners
router.get('/partners', async (_req, res) => {
  const partners = await Partner.find().sort({ createdAt: -1 });
  res.json({ success: true, partners });
});

// PATCH /api/admin/donations/:id  (UPDATE)
router.patch('/donations/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ success: false, message: 'Invalid donation id' });

  // Only these fields may be edited; createdAt/transactionId stay fixed.
  const editable = ['name', 'email', 'phone', 'amount', 'requireTaxCert', 'pan'];
  const updates = {};
  for (const key of editable) {
    if (key in req.body) updates[key] = req.body[key];
  }

  if (updates.amount !== undefined) {
    const amountNum = Number(updates.amount);
    if (!amountNum || amountNum < 100) {
      return res.status(400).json({ success: false, message: 'Minimum donation amount is \u20B9100' });
    }
    updates.amount = amountNum;
    updates.mealsFunded = Math.floor(amountNum / 10); // keep this derived field in sync
  }

  try {
    const donation = await Donation.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!donation) return res.status(404).json({ success: false, message: 'Donation not found' });
    res.json({ success: true, donation });
  } catch (err) {
    console.error('Error updating donation:', err);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// DELETE /api/admin/donations/:id  (DELETE)
router.delete('/donations/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ success: false, message: 'Invalid donation id' });

  const donation = await Donation.findByIdAndDelete(id);
  if (!donation) return res.status(404).json({ success: false, message: 'Donation not found' });
  res.json({ success: true });
});

// PATCH /api/admin/partners/:id  (UPDATE)
router.patch('/partners/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ success: false, message: 'Invalid partner id' });

  const editable = ['partnerType', 'orgName', 'contactName', 'email', 'phone', 'message'];
  const updates = {};
  for (const key of editable) {
    if (key in req.body) updates[key] = req.body[key];
  }

  if (updates.partnerType && !['corporate', 'school', 'individual'].includes(updates.partnerType)) {
    return res.status(400).json({ success: false, message: 'Invalid partner type' });
  }

  try {
    const partner = await Partner.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!partner) return res.status(404).json({ success: false, message: 'Partner request not found' });
    res.json({ success: true, partner });
  } catch (err) {
    console.error('Error updating partner:', err);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// DELETE /api/admin/partners/:id  (DELETE)
router.delete('/partners/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ success: false, message: 'Invalid partner id' });

  const partner = await Partner.findByIdAndDelete(id);
  if (!partner) return res.status(404).json({ success: false, message: 'Partner request not found' });
  res.json({ success: true });
});

module.exports = router;
