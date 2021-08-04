// 1. Require Mongoose
const mongoose = require('mongoose')
// 2. Require your Model
const Vampire = require('./models/vampire.js')
// 3. Require your extra data source
const vampireData = require('./populateVampires.js')

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/Vampire';
mongoose.connect(connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
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

/* Vampire.insertMany(vampireData, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("added populate vampires")
    }
    
  }); */

// ### Add some new vampire data

/* Vampire.insertMany(
    [{
        name: 'testname0',
        dob: new Date(1922, 2, 8, 5, 3),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['frilly shirtsleeves', 'trickery', 'card games'],
        location: 'Bucharest, Romania',
        gender: 'm',
        victims: 134
      },
      {
        name: 'testname1',
        dob: new Date(1922, 2, 8, 5, 3),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['frilly shirtsleeves', 'trickery', 'card games'],
        location: 'Bucharest, Romania',
        gender: 'm',
        victims: 134
      },
      {
        name: 'testname2',
        dob: new Date(1922, 2, 8, 5, 3),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['frilly shirtsleeves', 'trickery', 'card games'],
        location: 'Bucharest, Romania',
        gender: 'f',
        victims: 134
      },
      {
        name: 'testname3',
        dob: new Date(1922, 2, 8, 5, 3),
        hair_color: 'brown',
        eye_color: 'green',
        loves: ['frilly shirtsleeves', 'trickery', 'card games'],
        location: 'Bucharest, Romania',
        gender: 'f',
        victims: 134
      }], (err, data) => {
    console.log("added new vampire data")
  }); */
 


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/* Find all the vampires that that are females
Vampire.find({gender:'f'},(err,obj)=>{
    if(err){return console.log(err)}
    else {
        console.log(obj)
    }
})
 */
/* have greater than 500 victims
Vampire.find({victims:{ $gte: 150 }},(err,obj)=>{
    if(err){return console.log(err)}
    else {
        console.log(obj)
    }
}) */
/* have fewer than or equal to 150 victims
Vampire.find({victims:{$lte:150}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */

/* have a victim count is not equal to 210234
Vampire.find({victims:{$ne:210234}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
})  */
/* have greater than 150 AND fewer than 500 victims
Vampire.find({ 
    $and:[{victims:{$gt:150}}, 
    {victims:{$lt:500}}
    ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) 
 */


/////////////////////////////////////////////////
// ### Select by exists or does not exist
/* have a title property
Vampire.find({title:{$exists:true}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
        console.log("has a title")
    }
})  */
/* do not have a victims property
Vampire.find({victims:{$exists:false}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
        console.log("does not have victims")
    }
}) */

/* have a title AND no victims
Vampire.find({$and:[{victims:{$exists:true}},{victims:{$gte:1000}} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
        console.log("has no victims but has title")
    }
}) */
/* have victims AND the victims they have are greater than 1000
Vampire.find({$and:[{victims:0},{title:{$exists:true}} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
        console.log("has victims and over 1000")
    }
}) */


/////////////////////////////////////////////////
// ### Select with OR
/* are from New York, New York, US or New Orleans, Louisiana, US
Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */

/* love brooding or being tragic
Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */
/* have more than 1000 victims or love marshmallows
Vampire.find({$or:[{victims:{$gt: 1000}},{loves:'marshmallows'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */

/* have red hair or green eyes 
Vampire.find({$or:[{eye_color:'green'},{hair_color: 'red'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */


/////////////////////////////////////////////////
//### Select objects that match one of several values
/* love either frilly shirtsleeves or frilly collars
Vampire.find({$or:[{loves:'frilly shirtsleeves'},{loves: 'frilly collars'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
})
love brooding
Vampire.find({loves:'brooding'},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
})
love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find({$or:[{loves:'appearing innocent'},{loves: 'trickery'},{loves: 'lurking in rotting mansions'},{loves: 'R&B music'} ]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */
/* love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find({$and:[ {loves:'fancy cloaks'}, {loves:{$nin:'top hats'}},{loves:{$nin:'virgin blood'}},]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */

/////////////////////////////////////////////////
//### Negative Selection
/* love ribbons but do not have brown eyes
Vampire.find({$and:[{loves:'ribbons'},{eye_color:{$ne:'brown'}}]},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */
/* are not from Rome
Vampire.find({location: {$ne:'Rome, Italy'}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */
/* do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
Vampire.find({loves: {$nin:['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */
/* have not killed more than 200 people
Vampire.find({victims: {$lte:200}},(err,obj)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(obj)
    }
}) */



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
/* Replace the vampire called 'Claudia' with a vampire called 'Eve'.
Vampire.findOneAndUpdate( {name:'Claudia'},{ $set:{name:'Eve'} }, (err, obj)=>{
    if (err){
        console.log(err)
    }else{
        console.log(obj)
    }
}) */


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
