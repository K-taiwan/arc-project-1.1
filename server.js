const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const app = express();
const db = require("./models");
// const session = require("express-session");

// Routes
const routes = require("./routes");

// ------------------------------------------------- MIDDLEWARE ------------------------------------------------- //
// Serve Public Directory
app.use(express.static(__dirname + "/public"));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: "Sssshhhhhh, this is a secret....",
//     resave: false, // save session on every request
//     saveUninitialized: false // Only save session if session exists on req object.
//   })
// );

// ------------------------------------------------- ENDPOINTS ------------------------------------------------- //

// HTML Routes
app.use("/", routes.views);

// API Routes
app.use("/api/v1", routes.api);

//Show Cars

// Show cars

// app.get("/api/v1/cars", (req, res) => {
//   const file = `${__dirname}/db/cars.json`;
//   res.sendFile(file);
// });

// // update
// app.put("/api/v1/cars/:id", (req, res) => {
//   res.status(200).json({ success: true, msg: `Update car ${req.params.id}` });
// });

// // delete
// app.delete("/api/v1/cars/:id", (req, res) => {
//   res.status(200).json({ success: true, msg: `Delete car ${req.params.id}` });
// });

// TRYING HARD

// ----------------------------------------------- START SERVER ----------------------------------------------- //
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
