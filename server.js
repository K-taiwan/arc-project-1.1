const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const db = require("./models/Index");
// const session = require("express-session");

// Routes
// const routes = require("./routes");

// ------------------------------------------------- MIDDLEWARE ------------------------------------------------- //

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + "/public"));

// app.use(
//   session({
//     secret: "Sssshhhhhh, this is a secret....",
//     resave: false, // save session on every request
//     saveUninitialized: false // Only save session if session exists on req object.
//   })
// );

// ------------------------------------------------- ENDPOINTS ------------------------------------------------- //

// HTML Routes
// app.use("/", routes.views);

// API Routes
// app.use("/api/v1", routes.api);

//Show Cars

// Show cars

// app.get("/api/v1/cars", (req, res) => {
//   const file = `${__dirname}/db/cars.json`;
//   res.sendFile(file);
// });

// API CAR ROUTES-----------------------------------------------------------------------
app.get("/api/v1/cars", (req, res) => {
  db.Cars.find({}, (error, allCars) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      msg: "Show all cars",
      requestedAt: new Date().toLocaleString(),
      count: allCars.length,
      data: allCars
    });
  });
});

//Create Car
app.post("/api/v1/cars", (req, res) => {
  db.Cars.create(req.body, (error, createdNewCar) => {
    if (error) return console.log(error);
    res.json({
      status: 201,
      message: "Create new car",
      requestedAt: new Date().toLocaleString(),
      data: createdNewCar
    });
  });
});

// API SALE ROUTE------------------------------------------------------------------
app.get("/api/v1/sales", (req, res) => {
  db.Cars.find({}, (error, allSales) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      msg: "Show all sales",
      requestedAt: new Date().toLocaleString(),
      count: allSales.length,
      data: allSales
    });
  });
});

// New Sale
app.post("/api/v1/sales", (req, res) => {
  db.Cars.create(req.body, (error, newSale) => {
    if (error) return console.log(error);
    res.json({
      status: 201,
      message: "New sale",
      requestedAt: new Date().toLocaleString(),
      data: newSale
    });
  });
});

// HOME PAGE ROUTE
app.get("/", (req, res) => {
  const file = `${__dirname}/views/home.html`;
  res.sendFile(file);
});

// GALLERY ROUTE
app.get("/gallery", (req, res) => {
  const file = `${__dirname}/views/gallery.html`;
  res.sendFile(file);
});

// SINGLE CAR ROUTE
app.get("/gallery/:carId", (req, res) => {
  const file = `${__dirname}/views/singlecar.html`;
  res.sendFile(file);
});

// CHECKOUT ROUTE
app.get("/checkout", (req, res) => {
  const file = `${__dirname}/views/checkout.html`;
  res.sendFile(file);
});

// DASHBOARD ROUTE
app.get("/dashboard", (req, res) => {
  const file = `${__dirname}/views/dashboard.html`;
  res.sendFile(file);
});

// SUCCESS ROUTE
app.get("/success", (req, res) => {
  const file = `${__dirname}/views/success.html`;
  res.sendFile(file);
});

//SALES API ROUTES------------------------------------------------------

// SHOW ALL SALES
app.get("/api/v1/sales", (req, res) => {
  db.Sales.find({}, (error, allSales) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      msg: "Show all sales",
      requestedAt: new Date().toLocaleString(),
      count: allSales.length,
      data: allSales
    });
  });
});

// SHOW SINGLE SALE
app.get("/api/v1/sales/:id", (req, res) => {
  db.Sales.findOne({ id: req.params.id }, (error, foundSale) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      message: "Show a single sale",
      requestedAt: new Date().toLocaleString(),
      data: foundSale
    });
  });
});

// CREATE NEW SALE
app.post("/api/v1/sales", (req, res) => {
  db.Sales.create(req.body, (error, createdSale) => {
    if (error) return console.log(error);
    res.json({
      status: 201,
      message: "Create new sale",
      requestedAt: new Date().toLocaleString(),
      data: createdSale
    });
  });
});

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
