const mongoose = require("mongoose");
const DB_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/arc-app-projectOne";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

module.exports = {
  Car: require("./car"),
  Sales: require("./sales")
};
