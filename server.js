// 1. Require Mongoose
const mongoose = require('mongoose');

// 2. Require your Model
const Vampire = require('./models/vampire.js')


// 3. Require your extra data source
const vampires = require('./populateVampires')

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampiredb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampires, (err, data) => {
    console.log("added vamp data")
})

// ### Add some new vampire data
const newVampires = [{
    name: 'New Vampy',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1994, 7, 21, 7, 50),
    loves: ['cats','more cats'],
    location: 'San Francisco, CA',
    gender: 'f',
    victims: 9000
},{
    name: 'Pink Vampy',
    hair_color: 'pink',
    eye_color: 'brown',
    dob: new Date(1990, 8, 10, 7, 40),
    loves: ['not cats','dogs'],
    location: 'Honolulu, HI',
    gender: 'f',
    victims: 3000
},{
    name: 'Yellow Vampy',
    hair_color: 'yellow',
    eye_color: 'brown',
    dob: new Date(1900, 3, 15, 4, 50),
    loves: ['blood','more blood'],
    location: 'Austin, TX',
    gender: 'm',
    victims: 5
},{
    name: 'Green Vampy',
    hair_color: 'green',
    eye_color: 'brown',
    dob: new Date(1850, 2, 3, 6, 50),
    loves: ['garlic','water'],
    location: 'Naples, FL',
    gender: 'm',
    victims: 3
},]

Vampire.create(newVampires, (err, createdVampire) => {
    if (err) {
        console.log(err)
    } else {
        console.log(createdVampire)
    }
})

/////////////////////////////////////////////////
// ## QUERYING
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
