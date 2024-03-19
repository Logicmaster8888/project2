
// aka fruits model
const mongoose = require('mongoose');
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type:String},
    readyToEat: {type: Boolean},
    user: { type: mongoose.Types.ObjectId, ref: 'User'}
})


module.exports = mongoose.model("Fruit", fruitSchema)


