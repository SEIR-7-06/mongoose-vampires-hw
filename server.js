// 1. Require Mongoose
const mongoose = require('mongoose')
// 2. Require your Model
const vampire = require('./models/vampire')
// 3. Require your extra data source
const vampireData = require('./populateVampires')
// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampiresdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log('🥭 🥭 You are connected to MongoDB 🥭 🥭');
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// vampire.create(vampireData, ( err, createdVampire) => {
//     if (err) return console.log(err);
//     console.log(createdVampire);
// })
// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
    // vampire.find({ gender:'f'}, (err, foundVampires) => {
    //     if (err) return console.log(err)
    //     console.log(foundVampires);
    // })

// vampire.find({ victims: {$gt: 500 }}, (err,foundVampires) => {
//     if (err) return console.log(err);
//     console.log(foundVampires)
// })

// vampire.find({victims: {$lte: 150 }}, (err,foundVampires) => {
//     if (err) return console.log(err);
//     console.log(foundVampires)
// })
vampire.find({victims: {$ne: 210234 }}, (err,foundVampires) => {
    if (err) return console.log(err);
    console.log(foundVampires)
})
// vampire.find({victims: {$gt: 150, $lt: 500}}, (err,foundVampires) => {
//     if (err) return console.log(err);
//     console.log(foundVampires)
// })
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// vampire.find({victims: { $exists: false}}, (err, foundVampires) => {
//     if (err) return console.log(err);
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
module.exports = vampire
module.exports = mongoose