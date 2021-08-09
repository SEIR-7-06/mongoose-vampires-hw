// 1. Require Mongoose
const mongoose = require('mongoose');
const Vampire = require('./models/Vampire.js');
// 2. Require your Model
const db = require('./models/Vampire.js');
// 3. Require your extra data source
const vampireData = require('./populateVampires.js');
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
// console.log(`Print ${vampireData}`)
Vampire.collection.insertMany(vampireData, () =>{
    console.log(`Added ${vampireData}`);
});
// ### Add some new vampire data
// Vampire.create([{
//     name: 'Angel',
//     hair_color: 'black',
//     eye_color: 'brown',
//     dob: new Date(1727, 01),
//     loves: ['brooding', 'drawing', 'Buffy'],
//     location: 'Sunnydale, CA',
//     gender: 'm',
//     victims: 0
// },{
//     name: 'Angelus',
//     hair_color: 'black',
//     eye_color: 'brown',
//     dob: new Date(1753, 01),
//     loves: ['torturing', 'drawing', 'killing'],
//     location: 'Inside Angel',
//     gender: 'm',
//     victims: 53059,
// },{
//     name: 'Spike',
//     hair_color: 'bleach blond',
//     eye_color: 'brown',
//     dob: new Date(1853, 01),
//     loves: ['unattainable women', 'Passions (the soap opera)', 'Joyce Summers'],
//     location: 'Sunnydale, CA',
//     gender: 'm',
//     victims: 24,
// },{
//     name: 'The Count',
//     hair_color: 'black',
//     eye_color: 'black',
//     dob: new Date(1972, 11, 13),
//     loves: ['counting'],
//     location: 'Sesame Street, NY',
//     gender: 'm',
//     victims: '0',
// }])
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
    // 1. Find all the vampires that that are females

    // 2. have greater than 500 victims
    // 3. have fewer than or equal to 150 victims
    // 4. have a victim count is not equal to 210234
    // 5. have greater than 150 AND fewer than 500 victims
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
