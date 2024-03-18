// Import the necessary modules
const mongoose = require('mongoose');

// Define the schema for the Pokemon model
const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    abilities: {
        type: [String],
        required: true
    }
});

// Create the Pokemon model using the schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// Export the model to make it accessible in other files
module.exports = Pokemon;

// Good Example from App

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true, 
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true, // Fixed typo here
//     },
//     created: {
//         type: Date,
//         required: true,
//         default: Date.now,
//     },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


// Citation https://www.youtube.com/watch?v=nvSVZW2x8BQ&list=PL6u82dzQtlfvJoAWdyf5mUxPQRnNKCMGt&index=4

