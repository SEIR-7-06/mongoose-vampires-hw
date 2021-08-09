// 1. Require Mongoose
const mongoose = require('mongoose');

// 2. Require your Model
const Vampire = require('./models/vampire.js')

// 3. Require your extra data source
const vampData = require('./populateVampires.js')
//console.log(vampDb);

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampiredb';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString} 🥭`);
  });
  
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
// 	name: 'Harmony Legend',  
// 	hair_color: 'green', 
// 	eye_color: 'hazel',  
// 	dob: (1901, 12, 23), 
// 	loves: ['swimming', 'singing', 'killing'], 
// 	location: 'Brooklyn, New York', 
// 	gender: 'f', 
// 	victims: 23849
// }),

// Vampire.create({
// 	name: 'Issac Mackle',  
// 	hair_color: 'black', 
// 	eye_color: 'green',  
// 	dob: (1527, 07, 18), 
// 	loves: ['climbing', 'runing', 'jumping'], 
// 	location: 'New York City, New York', 
// 	gender: 'm', 
// 	victims: 890
// })

// Vampire.create({
// 	name: 'Alucard',  
// 	hair_color: 'sliver', 
// 	eye_color: 'blue',  
// 	dob: (1601, 10, 27), 
// 	loves: ['reading', 'traveling', 'living'], 
// 	location: 'Los Angels, California', 
// 	gender: 'm', 
// 	victims: 28
// })

// Vampire.create({
// 	name: 'Carmilla Murray',  
// 	hair_color: 'silver', 
// 	eye_color: 'red',  
// 	dob: (1607, 02, 08), 
// 	loves: ['swords', 'fighting', 'power'], 
// 	location: 'Bridge Valley, London', 
// 	gender: 'f', 
// 	victims: 13500
// })

/////////////////////////////////////////////////
// ## QUERYING


/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find({ gender: "f"}, (err, foundWomen) => {
//     if (err) return console.log(err);
//     console.log(foundWomen);
// })

// Vampire.find( {victims : { $gt: 500 } }, (err, greaterVictims) => {
//     if (err) return console.log(err);
//     console.log(greaterVictims);
// } )

// Vampire.find( { victims : { $lte: 150 } }, (err, fewerVictims) => {
//     if (err) return console.log(err);
//     console.log(fewerVictims);
// } )

// Vampire.find( { victims : { $ne: 210234 } }, (err, notEqualVictims) => {
//     if (err) return console.log(err);
//     console.log(notEqualVictims);
// } )

// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, foundVampires) => {
//     if (err) return console.log(err);
//     console.log(foundVampires);
// })
/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({ title: { $exists: true } }, (err, titleVampires) => {
//     if (err) return console.log(err);
//     console.log(titleVampires);
// })

// Vampire.find({ victims: { $exists: false } }, (err, noVictims) => {
//     if (err) return console.log(err);
//     console.log(noVictims);
// })

// Vampire.find({ $and: [ { title: { $exists: true } }, { victims: { $exists: false } } ] }, (err, newVampires) => {
//     if (err) return console.log(err);
//     console.log(newVampires);
// })

// Vampire.find( {victims : { $gt: 1000 } }, (err, manyVictims) => {
//     if (err) return console.log(err);
//     console.log(manyVictims);
// } )

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find( { $or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' } ] }, (err, locationVampires) => {
//     if (err) return console.log(err);
//     console.log(locationVampires);
// } )

// Vampire.find( { $or: [ { loves: 'brooding' }, { loves: 'being tragic' } ] }, (err, lovesVampires) => {
//     if (err) return console.log(err);
//     console.log(lovesVampires);
// } )

// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, { loves: 'marshmallows' } ] }, (err, crazyVampires) => {
//     if (err) return console.log(err);
//     console.log(crazyVampires);
// } )

// Vampire.find( { $or: [ { hair_color: 'red' }, { eye_color: 'green' } ] }, (err, colorVampires) => {
//     if (err) return console.log(err);
//     console.log(colorVampires);
// } )


/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find( { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' } ] }, (err, frillyVampires) => {
//     if (err) return console.log(err);
//     console.log(frillyVampires);
// } )

// Vampire.find( { loves: 'brooding' }, (err, broodVampires) => {
//     if (err) return console.log(err);
//     console.log(broodVampires);
// } )

// Vampire.find( { 
//     $or: [
//         {loves: 'appearing innocent'},
//         {loves: 'trickery'},
//         {loves: 'lurking in rotting mansions'},
//         {loves: 'R&B music'}
//     ]
//  }, (err, muchLoveVampire) => {
//     if (err) return console.log(err);
//     console.log(muchLoveVampire);
// } )




/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({ $and: [ { loves: 'ribbons' }, { eye_color: { $nin: ['brown']  } } ] }, (err, newNewVampires) => {
//     if (err) return console.log(err);
//     console.log(newNewVampires);
// })


// Vampire.find( { location: { $nin: [ 'Rome' ] } }, (err, noRomeVamp) => {
//     if (err) return console.log(err);
//     console.log(noRomeVamp);
// } )


// Vampire.find( { loves: { $nin: [ 
//     'fancy cloaks', 
//     'frilly shirtsleeves', 
//     'appering innocent',
//     'being tragic', 
//     'brooding' ] } }, (err, noLoveVamp) => {
//     if (err) return console.log(err);
//     console.log(noLoveVamp);
// } )


Vampire.find( { victims: { $ne: 200 } }, (err, victimsVamp) => {
    if (err) return console.log(err);
    console.log(victimsVamp);
} )



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
