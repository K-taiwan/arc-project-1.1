const express = require("express");
const bodyParser = require("body-parser");
// internal modules
const db = require("./models");
const routes = require("./routes");
// instanced module
const app = express();

app.get("/api/v1/sales", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all sales" });
});
