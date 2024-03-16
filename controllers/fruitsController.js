
// const express = require('express')
// const router = express.Router();

// const fruits = require('../models/fruits')
// const blogPosts = require('../models/blogPosts')

// router.get('/blog', (req, res) => {
//    res.render('index.ejs', { fruits })
// })

// router.get('/fruits/new', (req, res) => {
//     res.render('new.ejs')
// })

// router.delete('/fruits/:index', (req, res) => {
//     fruits.splice(req.params.index, 1)
//     res.redirect('/fruits')
// })


// router.post("/fruits/", (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
//     fruits.push(req.body);
//     res.render('index.ejs', { fruits });
// });

// // SHOW ROUTE
// router.get('/fruits/:index', (req, res) => {
//     console.log(req.params.index)
//     const fruit = fruits [req.params.index]
//     res.render('show.ejs', {fruit})
// })

// module.exports = router 

