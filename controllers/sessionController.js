const bcrypt = require('bcrypt');
const router = require('express').Router()
const db = require('../models');

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs',{
        currentUser: req.session.currentUser
    })
})

// router.post('/', async (req, res) => {
//     // 1) Find the user trying to log in (so that we can compare passwords)

// const foundUser = await db.User.findOne({ username: req.body.username });

//     // 2) after we find the user compare passwords

//     if (!foundUser){
//         return res.send('User not found')
//     } else if (await bcrypt.compareSync(req.body.password, foundUser.password)){
//         // 3) If the passwords match, create a new session
//         req.session.currentUser = foundUser // currentUser will exist on the req.sesion
        
//         res.redirect('/index')
//         // 2a) if the passwords match, create a new session
//         // 2b) if the passwords don't match, send an error message
//     } else{
//         res.send('Password does not match')
// }
// })

// // Log out aka destroy the session
// router.delete('/', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/index')
//     })
// })
module.exports = router

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits Line 1-38
*    Author: Billie Heidelberg, Justin White, Andrew Deitrick
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
// UPDATES BLOG
const updateBlog = (req, res) => {
    const blog = allBlogs.find(blog => req.params.index === blog.id);
    const changes = req.body;
    
}

