import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000
    });

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error;
  }
}
