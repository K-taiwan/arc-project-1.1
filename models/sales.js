const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesSchema = new Schema({
  paymentMethod: String,
  price: String,
  name: String,
  email: String,
  phone: String,
  birthdate: Date,
});

const Sales = mongoose.model('Sale', salesSchema);

module.exports = Sales;
