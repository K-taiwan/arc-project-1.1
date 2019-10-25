const express = require('express');
const router = express.Router();


// ROUTES

// HOME PAGE ROUTE
router.get('/', (req, res) => {
    res.sendFile('views/home.html', {
        root: `${__dirname}/../`
    });
  });
  
  // GALLERY ROUTE
  router.get('/gallery', (req, res) => {
    res.sendFile('views/gallery.html', {
        root: `${__dirname}/../`
    });
  });
  
  // SINGLE CAR ROUTE
  router.get('/gallery/:id', (req, res) => {
    res.sendFile('/views/checkoutId.html', {
        root: `${__dirname}/../`
    });
  });
  
  
  // DASHBOARD ROUTE
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
