const mongoose  = require("mongoose");
// const vampireData = require('vampireData')

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: false},
    hair_color: {type: String, required: false, default: 'blonde'},
    eye_color: {type: String, required: false},
    dob: {type: Date, required: false},
    loves: [{type: String, required: false}],
    location: {type: String, required: false},
    gender: {type: String, required: false},
    victims: {type: Number, min: 0, required: false}
});

const Vampire = mongoose.model('Vampire', vampireSchema);


module.exports = Vampire;