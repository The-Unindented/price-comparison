import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: { type: Array, default: [] },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;  // Use export default instead of module.exports
