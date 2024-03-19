// Later this will not be an array it will be the actual mode
// connected to a database

// aka fruits model
const mongoose = require('mongoose');
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type:String},
    readyToEat: {type: Boolean},
    // user: { type: mongoose.Types.ObjectId, ref: 'User'} add the comma for the code just in case
    user: { type: mongoose.Types.ObjectId, ref: 'User'},
});


module.exports = mongoose.model("Fruit", fruitSchema)


// / CITATION 
/***************************************************************************************
*    Title: SEIR-Pixel-Pandas/Fruits 1-55
*    Author: Billie Heidelberg, Justin White Andrew Deitrick
*    Date: 3-16/ 3-18/24
*    Code version: Latest 3/18
*    Availability: https://git.generalassemb.ly/SEIR-Pixel-Pandas/fruits
*
***************************************************************************************/
