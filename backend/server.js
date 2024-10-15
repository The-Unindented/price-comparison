import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://9000-idx-price-comparison-1728494610482.cluster-nx3nmmkbnfe54q3dd4pfbgilpc.cloudworkstations.dev', // Your frontend URL
  credentials: true, // Enable credentials if needed
}));
app.use(bodyParser.json());

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Routes
app.use('/api', userRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
