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
/////////////////////////////////////////////////
// ### Select by comparison
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
// Vampire.find({$and: [{victims: {$gt: 150 }}, {victims: {$lt: 5000}} ]}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title: {$exists: true }}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })
// Vampire.find({victims: {$exists: false }}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })
// Vampire.find({$and: 
//      {$or: [{victims: {$exist: false, $in :[0]}}]},
//     [{victims: {$exists: false }},
//      {title: {$exists: true}}
//     ]}, (err, allVampires) => {
//     if (err) return console.log(err);
//     console.log(allVampires)
// })
// Vampire.find({$and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]},
//     (err, allVampires) => {
//         if (err) return console.log(err);
//         console.log(allVampires)
//     })
/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]},
// (err, allVampires) => {
// if (err) return console.log(err)
// console.log(allVampires)
// })
// Vampire.find({loves: {$in: ['brooding', 'being tragic']}},
// (err, allVampires) => {
// if (err) return console.log(err)
// console.log(allVampires)
// })
// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]},
//     (err, allVampires) => {
//         if (err) return console.log(err)
//         console.log(allVampires)
// })
// Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, allVampires) =>
//     { if (err) console.log(err)
//         console.log(allVampires)
// })
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}, (err, allVampires) =>
// {
//     if (err) return console.log(err)
//     console.log(allVampires)
// })
// Vampire.find({loves: 'brooding'}, (err, allVampires) =>
// {
//     if (err) return console.log(err)
//     console.log(allVampires)
// })
// Vampire.find({loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}, (err, allVampires) =>
// {
//     if (err) return console.log(err)
//     console.log(allVampires)
// })
// Vampire.find({$and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hats', 'virgin blood']}}]}, (err, allVampires) =>
// {
//     if (err) return console.log(err)
//     console.log(allVampires)
// })
/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({$and: [{loves: 'ribbons'}, {eye_color: {$ne: 'brown'}}]}, (err, allVampires) =>
// {
//     if (err) console.log(err)
//     console.log(allVampires)
// })
// Vampire.find({location: {$ne: 'Rome'}}, (err, allVampires) =>
// {
//     if (err) console.log(err)
//     console.log(allVampires)
// })
// Vampire.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, allVampires) =>
// {
//     if (err) console.log(err)
//     console.log(allVampires)
// })
Vampire.find({victims: {$lte: 200}}, (err, allVampires) => {
    if (err) return console.log(err)
    console.log(allVampires)
})

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
