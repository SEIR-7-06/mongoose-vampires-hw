// 1. Require Mongoose
const mongoose = require('mongoose')

// 2. Require your Model
const Vampire = require('./models/vampire.js')

// 3. Require your extra data source
const vampireData = require('./populateVampires.js')

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampireDB'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('You are connected to MongoDB!')
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.create(vampireData, (err, createdVampires) => {
//     if(err) return console.log(err)
//     console.log('Created vampires!')
// })

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({ gender: 'f' }, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $gt: 500 }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $lte: 150 }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

Vampire.find({ victims: { $ne: 210234 }}, (err, foundVampires) => {
    if(err) return console.log(err)
    console.log(foundVampires)
})

// Vampire.find({ victims: { $gt: 150, $lte: 500 } }, (err, foundVampires) => {
//     if (err) return console.log(err)
//     console.log(foundVampires)
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({ victims: { $exists: false }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

// module.exports = {
//     Vampire: require('./models/vampire.js')
// }
