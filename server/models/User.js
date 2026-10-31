import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    sparse: true,
    unique: true
  },
  phone: {
    type: String,
    trim: true,
    sparse: true,
    unique: true
  },
  passwordHash: {
    type: String,
    select: false
  },
  age: String,
  gender: String,
  role: {
    type: String,
    default: 'Patient'
  },
  googleId: {
    type: String,
    sparse: true,
    unique: true
  },
  avatar: String
}, {
  timestamps: true
});

export default mongoose.models.User ||
  mongoose.model('User', userSchema);
