const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema(
  {
    partnerType: {
      type: String,
      enum: ['corporate', 'school', 'individual'],
      required: true,
    },
    orgName: { type: String, trim: true },
    contactName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Partner', partnerSchema);
