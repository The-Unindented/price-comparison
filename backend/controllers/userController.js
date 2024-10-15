import User from '../models/User.js'; // This should work if User.js is updated to use export default
import jwt from 'jsonwebtoken';

// Sign In Controller
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    // Create a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ message: 'Sign in successful', token });
  } else {
    return res.status(404).json({ message: 'Invalid email or password.' });
  }
};

// Sign Up Controller
export const signUp = async (req, res) => {
  const { fullName, email, age, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: 'An account with this email ID already exists. Please sign in.' });
  }

  const newUser = new User({ fullName, email, age, password });
  await newUser.save();

  // Create a token for the new user
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ message: 'Sign up successful', token });
};
