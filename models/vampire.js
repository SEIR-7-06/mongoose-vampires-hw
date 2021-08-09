const  mongoose  = require("mongoose")

// const vampire = [
//     {
//         name: 'Count Chocula',
//         hair_color: 'brown',
//         eye_color: 'brown',
//         dob: new Date(1971, 2, 13, 7, 47),
//         loves: ['cereal','marshmallows'],
//         location: 'Minneapolis, Minnesota, US',
//         gender: 'm',
//         victims: 2,
//       }
// ]  

const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hair_color: { type: String, default: 'blonde' },
    eye_color: String,
    dob: { type: Date },
    loves: Array,
    location: String,
    gender: String,
    victims: { type: Number, min: 0 } 
})

const monVampire = mongoose.model('monVampires', vampireSchema)
 module.exports = monVampire