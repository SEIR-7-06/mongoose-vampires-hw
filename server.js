// 1. Require Mongoose
const mongoose = require('mongoose')

// 2. Require your Model
// const Vampire = require('./models/vampire.js')
// 3. Require your extra data source
// const vampireData = require('./populateVampires.js')
const Vampire = require('./models/vampire.js')
// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampiresdb'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`)
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(data.array1, (err, data) => {
//     console.log('added da data')
//     mongoose.connection.close();
// })

// ### Add some new vampire data
// Vampire.collection.insertMany(data, (err, data) => {
//     console.log('custom vamps foo')
//     mongoose.connection.close();
// })


/////////////////////////////////////////////////
// ## QUERYING
// Vampire.find({gender: 'f'}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })

// Vampire.find({victims: {$gt: 500}}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })

// Vampire.find({victims: {$lte: 150}}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })
// Vampire.find({victims: {$not: 210234}}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })
Vampire.find({$and: [{victims: {$gt: 150 }}, {victims: {$lt: 5000}} ]}, (err, allVampires) => {
    if (err) return console.log(err);
    console.log(allVampires)
})
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

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
