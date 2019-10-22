const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  model: String,
  brand: String,
  year: String,
  price: Number,
  convertible: Boolean,
  description: String,
  sales:{
    type: Schema.Types.ObjectId,
    ref: 'sales'
  }
});

const Car = mongoose.model('Cars', carSchema);

module.exports = Car;