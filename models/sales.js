const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  cardNum: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  }
});

const newSale = mongoose.model("Sale", saleSchema);

module.exports = newSale;
