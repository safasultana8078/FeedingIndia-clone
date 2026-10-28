const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 100 },
    mealsFunded: { type: Number, required: true },
    requireTaxCert: { type: Boolean, default: false },
    pan: { type: String, trim: true, uppercase: true },
    transactionId: { type: String, required: true, unique: true },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

module.exports = mongoose.model('Donation', donationSchema);
