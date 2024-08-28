const express = require('express');
const router = express.Router();

// Example API route
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

module.exports = router;
