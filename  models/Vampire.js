const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hair_color: { type: String, default: "blonde", required: true },
    eye_color: { type: String, required: true },
    dob: { type: Date, required: true },
    loves: { type: Array, required: true },
    location: { type: String, required: true },
    gender: { type: String, required: true },
    victims: { type: Number, min: 0, required: true },
  });

  const Vampire = mongoose.model(‘Vampire’, vampireSchema);