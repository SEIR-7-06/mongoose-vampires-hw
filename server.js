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
Vampire.create({
	name: 'Harmony Legend',  
	hair_color: 'green', 
	eye_color: 'hazel',  
	dob: (1901, 12, 23), 
	loves: ['swimming', 'singing', 'killing'], 
	location: 'Brooklyn, New York', 
	gender: 'f', 
	victims: 23849
}),

Vampire.create({
	name: 'Issac Mackle',  
	hair_color: 'black', 
	eye_color: 'green',  
	dob: (1527, 07, 18), 
	loves: ['climbing', 'runing', 'jumping'], 
	location: 'New York City, New York', 
	gender: 'm', 
	victims: 890
})

Vampire.create({
	name: 'Alucard',  
	hair_color: 'sliver', 
	eye_color: 'blue',  
	dob: (1601, 10, 27), 
	loves: ['reading', 'traveling', 'living'], 
	location: 'Los Angels, California', 
	gender: 'm', 
	victims: 28
})

Vampire.create({
	name: 'Carmilla Murray',  
	hair_color: 'silver', 
	eye_color: 'red',  
	dob: (1607, 02, 08), 
	loves: ['swords', 'fighting', 'power'], 
	location: 'Bridge Valley, London', 
	gender: 'f', 
	victims: 13500
})

/////////////////////////////////////////////////
// ## QUERYING

// Vampire.find({ gender: "f"}, (err, foundWomen) => {
//     if (err) return console.log(err);
//     console.log(foundWomen);
// })



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
