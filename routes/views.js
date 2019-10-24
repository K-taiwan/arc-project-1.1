const express = require('express');
const router = express.Router();


// ROUTES

// Home page
// HOME PAGE ROUTE
// app.get("/", (req, res) => {
//   const file = `${__dirname}/views/home.html`;
//   res.sendFile(file);
// });
router.get('/', (req, res) => {
    res.sendFile('views/home.html', {
        root: `${__dirname}/../`
    });
  });
  
  // GALLERY ROUTE
  // app.get("/gallery", (req, res) => {
  //   const file = `${__dirname}/views/gallery.html`;
  //   res.sendFile(file);
  // });
  router.get('/gallery', (req, res) => {
    res.sendFile('views/gallery.html', {
        root: `${__dirname}/../`
    });
  });
  
  // SINGLE CAR ROUTE
  // app.get("/gallery/:carId", (req, res) => {
  //   const file = `${__dirname}/views/singlecar.html`;
  //   res.sendFile(file);
  // });
  router.get('/gallery/:id', (req, res) => {
    res.sendFile('/views/checkoutId.html', {
        root: `${__dirname}/../`
    });
  });
  
  // CHECKOUT ROUTE
  // app.get("/checkout", (req, res) => {
  //   const file = `${__dirname}/views/checkout.html`;
  //   res.sendFile(file);
  // });
  // router.get('/checkout', (req, res) => {
  //   res.sendFile('/views/checkout.html', {
  //       root: `${__dirname}/../`
  //   });
  // });
  
  // DASHBOARD ROUTE
  // app.get("/dashboard", (req, res) => {
  //   const file = `${__dirname}/views/dashboard.html`;
  //   res.sendFile(file);
  // });
  router.get('/dashboard', (req, res) => {
    res.sendFile('/views/dashboard.html', {
        root: `${__dirname}/../`
    });
  });
  
  // Success
  router.get('/success', (req, res) => {
    res.sendFile('/views/success.html', {
        root: `${__dirname}/../`
    });
  });

 
  

module.exports = router;
