const User = require('../models/userModel');

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Handle successful login
    res.json({ message: 'Login successful', user });
  },

  signup: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create new user
      const newUser = new User({ email, password });
      await newUser.save();

      // Handle successful signup
      res.status(200).json({ message: 'Signup successful', user: newUser });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = authController;
