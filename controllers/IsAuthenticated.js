const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect("/sessions/new");
    }
};

module.exports = isAuthenticated;

// CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits
*    Author: Billie Heidelberg, Justin White
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
