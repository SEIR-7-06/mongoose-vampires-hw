const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/vampiredb'
const Vampire = require('./models/Vampire.js')

mongoose.connect(connectionString, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// const vampireData = require('./populateVampires.js')

// Vampire.create(vampireData, (err, createdVampires)=>{
//     if (err) return console.log(err)
//     console.log('created Vampires')
// })

// Vampire.find({}, (err, allVampires) => {
// 	console.log(allVampires);
// });




// ### Add some new vampire data

const vamps = [
{
    name: 'Lenin',
    dob: Date(1870, 04, 22),
    hair_color: 'black as the night',
    eye_color: 'red as russia',
    gender: 'male'
},
{
    name: 'Lenin',
    dob: Date(1878, 12, 18),
    hair_color: 'bald',
    eye_color: 'black',
    gender: 'male'
},
{
    name: 'Sylvia Plath',
    dob: Date(1937, 10, 22),
    hair_color: 'brown',
    eye_color: 'blue',
    gender: 'female'
},{
    name: 'Jane',
    dob: Date(1972, 01, 2),
    hair_color: 'red',
    eye_color: 'blue',
    gender: 'female'
}]


// Vampire.create(vamps, (err, createdVamps)=>{
//     console.log(createdVamps)
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender:'female'}, (err, output)=>{
//      console.log(output)
// })
// Vampire.find({victims: { $gte:500}}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({victims: {$ne:210234}}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({victims: {$ne:210234}}, (err, output)=>{
//     console.log(output)
// })
// Vampire.find({victims: { $gt : 150 , $lt : 500 }}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({title:{$exists:true}}, (err, output)=>{
//     console.log(output)
// })
 
// Vampire.find(  { victims: {$exists: false}, title: {$exists: true}} , (err, output)=>{
//     console.log(output)
// })
// Vampire.find(  { victims: {$exists: true}, victims: {$gt: 1000}} , (err, output)=>{
//     console.log(output)
// })






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
// ## REMOVE/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
