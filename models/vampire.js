const mongoose  = require("mongoose");

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: true},
    hair_color: {type: String, required: true, default: 'blonde'},
    eye_color: {type: String, required: true},
    dob: {type: Date, required: true},
    loves: [{type: String, required: false}],
    location: {type: String, required: true},
    gender: {type: String, required: true},
    victims: {type: Number, min: 0, required: true}
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;