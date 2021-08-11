// 1. Require Mongoose
const mongoose = require('mongoose');


 
// 2. Require your Model
const vampires = require('./poulateVampires.js');


// 3. Require your extra data source

// 4. Connect your database

const connectionString = 'mongodb://localhost:27017/testblog';

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('You are connected to MongoDB! 🥭');
})

module.exports = {
  Vampire: this.Vampire
};

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Your server is running on localhost:${PORT}`);
}) 





/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

Vampire.collection.insertMany(vampireData, (err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data

Vampire.create(vampireSchema, err, Vampire) => {
    if (err) return console.log(err);
    console.log(Vampire);
})

const Vampire = new mongoose.Vampire({
    name: "George",
    hair_color: "red",
    eye_color: "blue",
    dob: 1988,
    loves: ["blood", "TV"],
    location: "Rome, Italy",
    gender: 'm',
    victims: 1,
  });

  const Vampire = new mongoose.Vampire({
    name: "Marshall",
    hair_color: "brown",
    eye_color: "green",
    dob: 1995,
    loves: ["blood", "walking"],
    location: "Seattle, WA, USA",
    gender: 'm',
    victims: 88
  });

  const Vampire = new mongoose.Vampire({
    name: "Natalie",
    hair_color: "brown",
    eye_color: "blue",
    dob: 1997,
    loves: ["blood", "running"],
    location: "Seattle, WA, USA",
    gender: 'f',
    victims: 899,
  });

  const Vampire = new mongoose.Vampire({
    name: "Sally",
    hair_color: "red",
    eye_color: "blue",
    dob: 1756,
    loves: ["blood", "hiking"],
    location: "London, England",
    gender: 'f',
    victims: 100000,
  });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

Vampire.find(gender: f). (err, output) => {
    console.log(output);
}
Vampire.find(victims: gte: 500, (err, output) =>
console.log(output))

Vampire.find(vitims: 2101234. (err, output) => {
    console.log(output);
})


Vampire.find(victims: gt: 150, 500 (err, output))
    console.log(output);
/////////////////////////////////////////////////
// ### Select by exists or does not exist
Vampire.find(title:exists:true) (err, output) => {
    console.log(output)
}
/////////////////////////////////////////////////
// ### Select with OR
Vampire.find()
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
