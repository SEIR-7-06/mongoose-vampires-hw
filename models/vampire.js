const  mongoose  = require("mongoose");

const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hair_color: { type: String, required: true, default: 'blonde' },
    eye_color: { type: String, required: true },
    dob: { type: Date },
    loves: [ String ],
    location: { type: String },
    gender: { type: String },
    victims: { type: Number, min: 1 },
})

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;