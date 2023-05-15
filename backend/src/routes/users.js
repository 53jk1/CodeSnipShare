const express = require('express');
const router = express.Router();
const User = require('../models/User');

// example route to create a new user
router.post('/new', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
});

module.exports = router;
