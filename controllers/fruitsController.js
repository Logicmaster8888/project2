
const express = require('express')
const router = express.Router();

const fruits = require('../models/fruits')
const blogPosts = require('../models/blogPosts')


// INDEX ROUTE
router.get('/blog', (req, res) => {
   res.render('index.ejs', { fruits })
});

// NEW - Send back a form to create new fruits
router.get("/new", (req, res) => {
    res.render("new-fruit", { currentUser: req.session.currentUser });
  });

// DELETE ROUTE
router.delete('/fruits/:index', (req, res) => {
    fruits.splice(req.params.index, 1)
    res.redirect('/fruits')
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route,
// edits the specified fruit document using the form data,
// and redirects the user back to the show page for the updated location.
router.put("/:id", async (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    await db.Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (fruit) => res.redirect("/fruits/" + fruit._id)
    );
  });

// CREATE ROUTE
router.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
});

// POST ROUTE
router.post("/fruits/", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    fruits.push(req.body);
    res.render('index.ejs', { fruits });
});


// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing fruit
router.get("/:id/edit", (req, res) => {
    db.Fruit.findById(req.params.id).then((fruit) => {
      res.render("edit-fruit", {
        fruit: fruit,
        currentUser: req.session.currentUser 
      });
    });
  });




// POST ROUTE
router.post("/fruits/", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    fruits.push(req.body);
    res.render('index.ejs', { fruits });
});

// SHOW ROUTE
router.get('/fruits/:index', (req, res) => {
    console.log(req.params.index)
    const fruit = fruits [req.params.index]
    res.render('show.ejs', {fruit})
})


module.exports = router 

