const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: String,
  brand: String,
  year: String,
  price: Number,
  convertible: Boolean,
  description: String,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;