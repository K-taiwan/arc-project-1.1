const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: String,
  brand: String,
  year: String,
  price: Number,
  image: String,
  convertible: Boolean,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;