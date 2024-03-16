const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    console.log("hello");
    res.send('Blog Posts Home Page');
});

router.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Viewing Blog Post ${postId}`);
});

// Export the router object
module.exports = router;
