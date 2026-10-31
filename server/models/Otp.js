import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    index: true
  },
  codeHash: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    enum: ['register', 'reset'],
    required: true
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0
  },
  attempts: {
    type: Number,
    default: 0
  },
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.models.Otp ||
  mongoose.model('Otp', otpSchema);
