// External Module
const express = require("express");
const bodyParser = require("body-parser");
// Instanced Module
const app = express();
// System Config
const PORT = process.env.PORT;
require('dotenv').config();

// Internal Module
const routes = require("./routes");

// ------------------------------------------------- MIDDLEWARE ------------------------------------------------- //
// Serve Public Directory
app.use(express.static(__dirname + "/public"));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ------------------------------------------------- ENDPOINTS ------------------------------------------------- //

// HTML Routes
app.use("/", routes.views);

// API Routes
app.use("/api/v1", routes.api);

// ----------------------------------------------- START SERVER ----------------------------------------------- //
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
