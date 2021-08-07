//schema and model will go here
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String, required: true},
    dob: Date,
    loves: [String],
    location: {type: String, required: true},
    gender: {type: String, required: true},
    victims: {type: Number, min: 0}
})

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;