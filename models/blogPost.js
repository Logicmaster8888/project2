// routes/blogpost.js
const express = require('express');
const router = express.Router();

router.get('/create-post', (req, res) => {
    try {
        // Assuming you have an array of blog posts named blogPosts
        const blogPosts = [
            {
                title: 'Sample Blog Post 1',
                content: 'This is the content of the first blog post.',
                image: '/images/image1.jpg'
            },
            {
                title: 'Sample Blog Post 2',
                content: 'This is the content of the second blog post.',
                image: '/images/image2.jpg'
            },
            // Add more blog posts as needed
        ];

        // Render the create-post page with blogPosts array
        res.render('create-post', { blogPosts });
    } catch (error) {
        console.error('Error rendering create-post page:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
