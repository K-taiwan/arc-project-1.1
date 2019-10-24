const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  birthDate: {
    type: Date,
    // required: true
  },
  phone: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  zip: {
    type: Number,
    // required: true
  },
  paymentMethod: {
    type: String,
    // required: true
  },
  nameOnCard: {
    type: String,
    // required: true
  },
  cardNum: {
    type: String,
    // required: true
  },
  expDate: {
    type: Date,
    // required: true
  },
  cvv: {
    type: Number,
    // required: true
  },
  carId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
      // required: true
    }
  ],
  price: {
    type: String,
    // required: true
  }
});

const newSale = mongoose.model("Sales", saleSchema);

module.exports = newSale;
