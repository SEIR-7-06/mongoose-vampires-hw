// 1. Require Mongoose
const mongoose = require('mongoose')
// 2. Require your Model
const db = require('./models/vampire')
// 3. Require your extra data source

// 4. Connect your database

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
db.Vampire.create({
    name: 'newCount',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1571, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2,
  },{
    name: 'newJoker',
    hair_color: 'green',
    eye_color: 'brown',
    dob: new Date(171, 2, 15, 7, 47),
    loves: ['robin'],
    location: 'gotham',
    gender: 'm',
    victims: 300,
  },{
    name: 'newHarley Quinn',
    hair_color: 'blonde',
    eye_color: 'black',
    dob: new Date(1990, 7, 17, 7, 47),
    loves: ['hammers','joker'],
    location: 'Gotham',
    gender: 'f',
    victims: 88,
  },{
    name: 'newAlucard',
    hair_color: 'silver',
    eye_color: 'brown',
    dob: new Date(1671, 8, 22, 3, 50),
    loves: ['Dracula'],
    location: 'Castlevania',
    gender: 'f',
    victims: 1000,
  }, (err, createVampires) => {
    if(err) return console.log(err);
    console.log(createVampires)
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

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
module.exports = monVampire
module.exports = mongoose