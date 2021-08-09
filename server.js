// 1. Require Mongoose
const mongoose = require('mongoose');
const express = require('express'); // Pulling in the express package into this file
const rowdy = require('rowdy-logger')

// 2. Require your Model
const Vampire = require('./model/vampire') // The "database"
// const vampireController = require('./controllers/vampireController.js');
/* Variables */
const app = express(); // Creating an instance of an express app
const port = 4000;
const rowdyResults = rowdy.begin(app)

//Middleware
// app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })) 
// app.use('/vampires', vampireController);

// 3. Require your extra data source
const vampireData = require('./populateVampires.js')

// 4. Connect your database
// Get the address to the Mongo database
const connectionString = 'mongodb://localhost:/vampiredb';

// Fire off the connection to the Mongo database
//And deactivates those mongoose deprecation warnings
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString} 🧛‍♀️`);
  });

//Write your answers to add, query, update, remove, and Hungry for More below.
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.create(vampireData, (err, createdVampires) => {
  if(err) return console.log(err)
  console.log('Created Vampires!')
})

//THIS IS WRONG AND CANNOT BE SEEN IN NODE
// Vampire.collection.insertMany(vampireStuff,(error, data) => {
//     console.log("populated some bloodsuckers")
//   });


//RESOURCES
//https://mongoosejs.com/docs/api/query.html#query_Query-find
//https://docs.mongodb.com/manual/reference/operator/query/
/////////////////////////////////////////////////
// ### Add some new vampire data
// ## QUERYING
///////////////////////////////////////////
// ### Select by comparison

//1:
// Vampire.find({gender: f}, (err, foundVampires) => {
//   if(err) return console.log(err)
// })

//2:
// Vampire.find({ victims: { $gt: 500}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// )}

//3:
// Vampire.find({ victims: { $lte: 150}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// )}

//4:
// Vampire.find({ victims: {$ne: 210234}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })

//5
// Vampire.find({ victims: {$gt: 150, $lt: 500}  }, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

//1.
// Vampire.find({ title: {$exists: true}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })

//2.
// Vampire.find({ victims: {$exists: false}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })

//3
// Vampire.find({ victims: {$exists: false}, title: {$exists: true}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })

//4
// Vampire.find({ victims: {$exists: true, $gt: 1000}}, (err, foundVampires) => {
//   if(err) return console.log(err)
//   console.log(foundVampires)
// })
/////////////////////////////////////////////////
// ### Select with OR

//1:
// Vampire.find({ $or: [
//   { location: 'New York, New York, US' },
//   { location: 'New Orleans, Louisiana, US' }
// ]},
// (err, foundVampires) => {
//   if (err) return console.log(err)
//   console.log(foundVampires)
// })

//2:
// Vampire.find({ $or: [
//   { loves: 'brooding' },
//   { loves: 'being tragic' }
// ]},
// (err, foundVampires) => {
//   if (err) return console.log(err)
//   console.log(foundVampires)
// })

//3:
// Vampire.find({ $or: [
//   { victims: {$gt: 1000}},
//   { loves: 'marshmallows'}
// ]},
// (err, foundVampires) => {
//   if (err) return console.log(err)
//   console.log(foundVampires)
// })

//4:
Vampire.find({ $or: [
  { hair_color: 'red'},
  { eye_color: 'green'}
]},
(err, foundVampires) => {
  if (err) return console.log(err)
  console.log(foundVampires)
})


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

  