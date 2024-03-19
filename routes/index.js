const express = require('express');
const router = express.Router();

const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
// Add other router imports as needed

router.use('/blog', blogRoutes);
router.use('/user', userRoutes);
// Add other routers as needed

module.exports = router;
