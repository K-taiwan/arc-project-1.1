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
  date: String,
  // id:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Car'
  // },
  // sales:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Sales'
  // }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;