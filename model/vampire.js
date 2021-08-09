const mongoose = require('mongoose')

//////////NUMBER 3///////////
// const vampire = {
//     name: 'Count Chocula',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 2,
//   }

const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    dob:  { type: Date},
    hair_color: { type: String, default: 'blonde'},
    eye_color: { type: String},
    loves: [{type: String}],
    location: { type: String},
    gender: { type: String},
    victims: { type: Number, min: 1},
})

const Vampire = mongoose.model('Vampire', vampireSchema)
module.exports = Vampire