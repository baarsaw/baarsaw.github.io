const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const contactRoutes = require('./routes/contact');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API routes
app.use('/api', apiRoutes);
app.use('/api/contact', contactRoutes);

// Serve the frontend's index.html for any unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
