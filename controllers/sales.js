const db = require('../models');



  //SALES API ROUTES------------------------------------------------------
  
  // SHOW ALL SALES
  const index = (req, res) => {
    db.Sales.find({}, (err, allSales) => {
      if (err) return console.log(err);
      res.json({
        status: 200,
        msg: "Show all sales",
        requestedAt: new Date().toLocaleString(),
        count: allSales.length,
        data: allSales
      });
    });
  };
  
  // SHOW SINGLE SALE
  const show = (req, res) => {
    db.Sales.findById({ id: req.params.id }, (err, foundSale) => {
      if (err) return console.log(err);
      
      res.json({
        status: 200,
        message: "Show a single sale",
        requestedAt: new Date().toLocaleString(),
        data: foundSale
      });
    });
  };
  
  // CREATE NEW SALE
  const create = (req, res) => {
    db.Sales.create(req.body, (err, createdSale) => {
      if (err) return console.log(err);
      res.json({
        status: 201,
        message: "Create new sale",
        requestedAt: new Date().toLocaleString(),
        data: createdSale
      });
    });
  };


  const destroy = (req, res) => {
    db.Sales.findByIdAndDelete(req.params.id, (err, deletedSale) => {
      if (err) res.status(500).json({ 
        status: 500, 
        err: 'Something went wrong please try again' });
  
      res.status(200).json({ 
        status: 200, 
        data: deletedSale })
    });
  }




module.exports = {
  index,
  show,
  create,
  destroy,
}