// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire.js')
// 3. Require your extra data source
const vampireData = require('./populateVampires.js')
// 4. Connect your database
const db = require('./models/index.js')

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData, (err, newVampire) => {
    console.log('added vampire')
    mongoose.connection.close()
})
// ### Add some new vampire data
Vampire.create({ name: Dracula })
Vampire.create({ name: Chocula })
Vampire.create({ name: Brooke })
Vampire.create({ name: Frank })
/////////////////////////////////////////////////
// ## QUERYING
Vampire.find({ gender: 'female' })
Vampire.find({ victims: '$gt 500' })
Vampire.find({ victims: '$lte 150' })
Vampire.find({ victims: '$nin 210234' })
Vampire.find({ victims: '$gt 150', victims: '$lt 500' })
/////////////////////////////////////////////////
// ### Select by comparison
Vampire.find({ 'title':{$exists: true} })
Vampire.find({ 'victims':{$exists: false} })
Vampire.find({ 'title':{$exists: true}, 'victims':{$exists: false} })
Vampire.find({ 'title':{$exists:true}, victims: '$gt 1000' })
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
