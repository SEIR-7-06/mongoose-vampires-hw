const mongoose = require('mongoose');


// Set the Schema - Defines what we want an Author to look like
vampireSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hair_color: { type: String, default: 'Blonde'},
  eye_color: String,
  dob: Number,
  loves: Array,
  location: String,
  gender: String,
  victims: { type: Number, min: 0 }
});

// Create the Author model - our interface for working with Authors
const Vampire = mongoose.model('Vampire', vampireSchema);

// Export the model
module.exports = Vampire