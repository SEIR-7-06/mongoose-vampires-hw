// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire')
// 3. Require your extra data source
const vampireData = require('./populateVampires')
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
Vampire.create(vampireData, (err, createdVampires) => {
    if(err) return conole.log(err)
    // console.log(createdVampires)
})
// ### Add some new vampire data
Vampire.create({ name: 'Dracula' })
Vampire.create({ name: 'Chocula' })
Vampire.create({ name: 'Brooke' })
Vampire.create({ name: 'Frank' })
/////////////////////////////////////////////////
// ## QUERYING
Vampire.find({ gender: 'f' }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ victims: {$gt: 500}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ victims: {$lte: 150}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ victims: {$nin: 210234}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ victims: {$gt: 150, $lt: 500}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
/////////////////////////////////////////////////
// ### Select by comparison
Vampire.find({ 'title':{$exists: true} }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ victims:{$exists: false} }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ title:{$exists: true}, victims:{$exists: false} }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ title:{$exists:true}, victims: {$gt: 1000} }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
/////////////////////////////////////////////////
// ### Select by exists or does not exist

Vampire.find({ 'title':{$exists: true} }, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ 'victims':{$exists: false}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ 'title':{$exists: true}, 'victims':{$exists: false}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find({ 'victims':{$exists: true, $gt: 1000}}, (err, foundVampires) =>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
/////////////////////////////////////////////////
// ### Select with OR
Vampire.find( { $or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' } ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )
Vampire.find( { $or: [ { loves: 'brooding' }, { loves: 'being tragic' } ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )
Vampire.find( { $or: [ { loves: 'marshmallows' }, { victims: {$gt: 1000} } ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )
Vampire.find( { $or: [ { hair_color: 'red' }, { eye_color: 'green' } ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )

/////////////////////////////////////////////////
//### Select objects that match one of several values
Vampire.find( { $or: [ { loves: 'frilly collars' }, { loves: 'frilly shirtsleeves' } ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )
Vampire.find({ loves: 'brooding'}, (err, foundVampire)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
})
Vampire.find( { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'luring in rotting mansions'}, { loves: 'R&B music'} ] },(err, foundVampires)=>{
    if(err) return console.log(err)
    console.log(foundVampires)
} )
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
