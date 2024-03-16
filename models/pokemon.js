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
