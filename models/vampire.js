const mongoose = require('mongoose');

// Set the Schema
const lovesSchema = new mongoose.Schema({
    type: Array,
});
const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hair_color: { type: String, default: 'blonde', },
    eye_color: {type: String, },
    dob: { type: Date, },
    loves: [lovesSchema],
    location: String,
    gender: String,
    victims: { type: Number, min: 0 }
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;