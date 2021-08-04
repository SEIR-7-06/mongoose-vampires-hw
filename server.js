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
