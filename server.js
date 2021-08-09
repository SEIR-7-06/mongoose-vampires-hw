// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/Vampire.js');
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
// Vampire.collection.insertMany(vampireData, () =>{
//     console.log(`Added ${vampireData}`);
// });
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
// Vampire.find({ gender: 'f'}, (err, foundVampires) => {
//     console.log(foundVampires);
//     mongoose.connection.close();
// })
    // 2. have greater than 500 victims
// Vampire.find({ victims: {$gt: 500}}, (err, foundVampires) => {
//     console.log(foundVampires);
//     mongoose.connection.close();
// })
    // 3. have fewer than or equal to 150 victims
    // Vampire.find({ victims: {$lte: 150}}, (err, foundVampires) => {
    //     console.log(foundVampires);
    //     mongoose.connection.close();
    // })
    // 4. have a victim count is not equal to 210234
    // Vampire.find({ victims: {$ne: 210234}}, (err, foundVampires) => {
    //     console.log(foundVampires);
    //     mongoose.connection.close();
    // })
    // 5. have greater than 150 AND fewer than 500 victims
    // Vampire.find({ victims: {$gt: 150, $lt: 500}}, (err, foundVampires) => {
    //     console.log(foundVampires);
    //     mongoose.connection.close();
    // })
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// 1. have a title property
// Vampire.find({ title: {$exists: true}}, function (err, foundVampires){
//     if (err) {
//         console.log(err);
//         mongoose.connection.close();
//     } else {
//         console.log(foundVampires)
//         mongoose.connection.close();
//     }
// })
// 2. do not have a victims property
// Vampire.find({ victims: {$exists: false}}, function (err, foundVampires){
//     if (err) {
//         console.log(err);
//         mongoose.connection.close();
//     } else {
//         console.log(foundVampires)
//         mongoose.connection.close();
//     }
// })
// 3. have a title AND no victims
// Vampire.find({ victims: {$exists: false}, title: {$exists: true}}, function (err, foundVampires){
//     if (err) {
//         console.log(err);
//         mongoose.connection.close();
//     } else {
//         console.log(foundVampires)
//         mongoose.connection.close();
//     }
// })
// 4. have victims AND the victims they have are greater than 1000
// Vampire.find({ victims: {$exists: true}, victims: {$gt: 1000}}, function (err, foundVampires){
//     if (err) {
//         console.log(err);
//         mongoose.connection.close();
//     } else {
//         console.log(foundVampires)
//         mongoose.connection.close();
//     }
// })
/////////////////////////////////////////////////
// ### Select with OR
// 1. are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({ $or: [
//     { location: 'New York, New York, US' },
//     { location: 'New Orleans, Louisiana, US' }
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err)
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 2. love brooding or being tragic
// Vampire.find({ $or: [
//     { loves: 'brooding' },
//     { loves: 'being tragic' }
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err)
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 3. have more than 1000 victims or love marshmallows
// Vampire.find({ $or: [
//     { victims: {$gt: 1000} },
//     { loves: 'marshmallows' }
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 4. have red hair or green eyes
// Vampire.find({ $or: [
//     { hair_color: 'red' },
//     { eye_color: 'green' }
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
/////////////////////////////////////////////////
//### Select objects that match one of several values
// 1. love either frilly shirtsleeves or frilly collars
// Vampire.find({ $or: [
//     { loves: 'frilly shirtsleeves' },
//     { eye_color: 'frilly collars' }
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 2. love brooding
// Vampire.find({ loves: 'brooding' },
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({ $or: [
//     { loves: 'appearing innocent' },
//     { loves: 'trickery' },
//     { loves: 'lurking in rotting mansions' },
//     { loves: 'R&B music' },
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
// 4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({ $or: [
//     { loves: 'fancy cloaks' },
//     { loves: { $nin: ['top hats'] } },
//     { loves: { $nin: ['virgin blood'] } },
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires)
//             mongoose.connection.close();
//         }
//     }
// )
/////////////////////////////////////////////////
//### Negative Selection
// 1. love ribbons but do not have brown eyes
// Vampire.find({ $and: [
//     { loves: 'ribbons' },
//     { eye_color: { $nin: ['brown'] } },
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires);
//             mongoose.connection.close();
//         }
//     }
// ) 
// 2. are not from Rome
// Vampire.find({ location: { $nin: ['Rome, Italy']}},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires);
//             mongoose.connection.close();
//         }
//     }
// ) 
// 3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({ $and: [
//     { loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding' ] } },
// ]},
//     function (err, foundVampires){
//         if (err) {
//             console.log(err);
//             mongoose.connection.close();
//         } else {
//             console.log(foundVampires);
//             mongoose.connection.close();
//         }
//     }
// ) 
// 5. have not killed more than 200 people
Vampire.find({ victims: { $lt: 200 }},
    function (err, foundVampires){
        if (err) {
            console.log(err);
            mongoose.connection.close();
        } else {
            console.log(foundVampires);
            mongoose.connection.close();
        }
    }
) 
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
