// 1. Require Mongoose
const mongoose = require('mongoose');
const Vampire = require('./models/Vampire.js');
// const Vampire = require('./models/Vampire.js');

// 2. Require your Model
module.exports = {
    Vampire: require('./models/Vampire.js')
}

// 3. Require your extra data source
const vampData = require('./populateVampires.js')

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampiresdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Your bloodsucking database is at ${connectionString}.`)
})



/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampData, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
//     mongoose.connection.close();
// })
// ### Add some new vampire data
// Vampire.create({
// 	name: 'Luna Rey',  
// 	hair_color: 'purple', 
// 	eye_color: 'black',  
// 	dob: (1610, 06, 16), 
// 	loves: ['writing', 'reading', 'crying'], 
// 	location: 'Portland, Maine', 
// 	gender: 'f', 
// 	victims: 186
// })
// Vampire.create({
// 	name: 'Astrid Blair',  
// 	hair_color: 'silver', 
// 	eye_color: 'green',  
// 	dob: (110, 02, 22), 
// 	loves: ['glass blowing', 'snowboarding', 'hiking', 'hot chocolate'], 
// 	location: 'Swiss Alps', 
// 	gender: 'f', 
// 	victims: 4
// })
// Vampire.create({
// 	name: 'Julian Frost',  
// 	hair_color: 'black', 
// 	eye_color: 'amber',  
// 	dob: (2050, 10, 3), 
// 	loves: ['helping people', 'forging weapons', 'visiting friends', 'travelling'], 
// 	location: 'Kyoto, Japan', 
// 	gender: 'm', 
// 	victims: 999
// })
// Vampire.create({
// 	name: 'Gio Galileo',  
// 	hair_color: 'red', 
// 	eye_color: 'black',  
// 	dob: (1946, 12, 1), 
// 	loves: ['hiding', 'motorcycles', 'meat'], 
// 	location: 'unknown', 
// 	gender: 'm', 
// 	victims: 420
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: "f"}, (err, foundWomen) => {
//     if (err) return console.log(error)
//     console.log(foundWomen)
// })

// Vampire.find({victims: {$gt: 500}}, (err, highCount) => {
//     if (err) return console.log(error)
//     console.log(highCount)
// })

// Vampire.find({victims: {$lte: 150}}, (err, lowCount) => {
//     if (err) return console.log(error)
//     console.log(lowCount)
// })

// Vampire.find({victims: {$ne: 210234}}, (err, exceptOne) => {
//     if (err) return console.log(err)
//     console.log(exceptOne)
// })

Vampire.find({$and:[{victims: {$gt: 150}}, {victims: {$lt:500}}]}, (err, special) => {
    if (err) return console.log(err)
    console.log(special)
})

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
