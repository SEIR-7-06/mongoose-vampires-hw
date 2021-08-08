// 1. Require Mongoose
const mongoose = require('mongoose');

const vampireData = require('./populateVampires.js')

// 2. Require your Model
const Vampire = require('./models/vampire.js')


// 3. Require your extra data source
// const vampires = require('./populateVampires.js')

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
//////////// ANSWER 1 //////////////////////////
// Vampire.collection.insertMany(vampireData, (err, data) => {
//     // console.log("added vamp data")
// })

// ////////// ANSWER 2 //////////////////////////
// // ### Add some new vampire data
// const newVampires = [{
//     name: 'New Vampy',
//     hair_color: 'black',
//     eye_color: 'brown',
//     dob: new Date(1994, 7, 21, 7, 50),
//     loves: ['cats','more cats'],
//     location: 'San Francisco, CA',
//     gender: 'f',
//     victims: 9000
// },{
//     name: 'Pink Vampy',
//     hair_color: 'pink',
//     eye_color: 'brown',
//     dob: new Date(1990, 8, 10, 7, 40),
//     loves: ['not cats','dogs'],
//     location: 'Honolulu, HI',
//     gender: 'f',
//     victims: 3000
// },{
//     name: 'Yellow Vampy',
//     hair_color: 'yellow',
//     eye_color: 'brown',
//     dob: new Date(1900, 3, 15, 4, 50),
//     loves: ['blood','more blood'],
//     location: 'Austin, TX',
//     gender: 'm',
//     victims: 5
// },{
//     name: 'Green Vampy',
//     hair_color: 'green',
//     eye_color: 'brown',
//     dob: new Date(1850, 2, 3, 6, 50),
//     loves: ['garlic','water'],
//     location: 'Naples, FL',
//     gender: 'm',
//     victims: 3
// },]

// Vampire.create(newVampires, (err, createdVampire) => {
//     if (err) console.log(err)
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
////////// 1. FEMALES ////////////////////////////
// Vampire.find({ gender: 'f'}, (err, foundVampires) => {
// })

////////// 2. 500+ VICTIMS /////////////////////////////////
// Vampire.find({ victims: {$gt : 500}}, (err, foundVampires) => {
// })

////////// 3. LESS THAN OR = TO 150 VICTIMS /////////////////
// Vampire.find({ victims: {$lte : 150}}, (err, foundVampires) => {
// })

////////// 4. NOT EQUAL TO 210234 VICTIMS ///////////////////
// Vampire.find({ victims: {$ne : 210234}}, (err, foundVampires) => {
// })

////////// 5. GREATER THAN 150 && LESS THAN 500 VICTIMS /////
// Vampire.find({ 'victims': {$gt : 150, $lt : 500}}, (err, foundVampires) => {
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist
////////// 1. HAS A TITLE PROPERTY ////////////////////////////
// Vampire.find({ title :{ $exists: true}}, function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

// ////////// 1. NO VICTIMS PROPERTY ////////////////////////////
// Vampire.find({ victims :{ $exists: false}}, function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 1. HAS TITLE && NO VICTIMS PROPERTY ////////////////////
// Vampire.find({ victims :{ $exists: false}, title :{$exists: true}}, function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 1. HAS VICTIMS & GREATER THAN 1000 VICTIMS ////////////////////
// Vampire.find({ victims :{ $exists: true}, victims :{$gt: 1000}}, function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })


/////////////////////////////////////////////////
// ### Select with OR

////////// 1. NY OR NEW ORLEANS ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { location : 'New York, New York, US'},
//     { location: 'New Orleans, Louisiana, US' } 
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 2. BROODING OR BEING TRAGIC ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { loves : 'brooding'},
//     { loves: 'being tragic' } 
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 3. LOVES MARSHMALLOWS / OVER 1000 VICTIMS ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { loves : 'marshmallows'},
//     { victims: {$gt : 1000} } 
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 4. RED HAIR / GREEN EYES ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { hair_color : 'red'},
//     { eye_color: 'green' } 
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })



/////////////////////////////////////////////////
//### Select objects that match one of several values

////////// 1. frilly shirtsleeves / frilly collars ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { loves: 'frilly shirtsleeves'},
//     { loves: 'frilly collars' } 
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 2. LOVES BROODING ////////////////////
// Vampire.find({ 
//   loves: 'brooding'
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 3. appearing innocent, trickery, lurking in rotting mansions, R&B music ////////////////////
// Vampire.find({ 
//   $or: [ 
//     { loves: 'appearing innocent' },
//     { loves: 'trickery' },
//     { loves: 'lurking in rotting mansions' },
//     { loves: 'R&B music' }
//   ]
// }, 
//   function (err, vamp){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Result :", vamp)
//     }
// })

////////// 4. loves fancy cloaks but not if they also love either top hats or virgin blood ////////////////////
Vampire.find({
  $and: [ 
    { loves: 'fancy cloaks' },
    { loves: { $nin: ['top hats'] }},
    { loves: { $nin: ['virgin blood'] }}
  ]
},
  function (err, vamp){
    if (err) {
        console.log(err)
    }else{
        console.log("Result :", vamp)
    }
})


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
