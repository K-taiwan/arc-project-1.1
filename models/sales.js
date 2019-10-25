const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  nameOnCard: {
    type: String,
  },
  cardNum: {
    type: String,
  },
  expDate: {
    type: Date,
  },
  cvv: {
    type: Number,
  },
  carId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    }
  ],
  price: {
    type: String,
  },
  paymentReceived: String,
});

const newSale = mongoose.model("Sales", saleSchema);

module.exports = newSale;
