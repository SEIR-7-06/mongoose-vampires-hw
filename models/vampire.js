const mongoose = require('mongoose')
const vampireSchema = new mongoose.Schema({
    vampireName: { type: String, required: true },
    vampireHairColor: {type: String, default:'blonde'},
    vampireEyeColor: {type:String, },
    vapireDOB: {type:Date, default: Date.now},
    vampireLoves: {type: [String]},
    vampireLocation: {type:String},
    vampireGender: {type: String},
    vampireVictims: {
        type: Number,
        min: 0
    }
    

    

})

const Vampire = mongoose.model('Vampire', vampireSchema);


module.exports = Vampire