const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://surajjosh456:Sur@j800000@flightconsumers.vy2aywu.mongodb.net/?retryWrites=true&w=majority&appName=flightconsumers')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for the data
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// POST route to save user data
app.post('/api/notify', async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    const newUser = new User({ name, phone, email });
    await newUser.save();
    res.status(200).json({ message: 'User data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data', error });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
