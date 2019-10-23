const db = require('../models');

const create = (req, res) => {
    db.Car.create(req.body, (err, createdNewCar) => {
      if (err) return console.log(err);
      res.json({
        status: 201,
        message: "Create new car",
        requestedAt: new Date().toLocaleString(),
        data: createdNewCar
      });
    });
};


const show = (req, res) => {
  console.log('Received request at Profile Route');
  db.Car.findById(req.params.id, (err, foundCar) => {
    if (err) return res.status(500).json(err)
    res.json({
      status: 200,
      data: foundCar,
    });
  });

  
}


// Index Profiles
const index = (req, res) => {
    db.Car.find({}, (error, allCars) => {
      if (error) return console.log(error);
      res.json({
        status: 500,
        msg: "Show all Cars",
        requestedAt: new Date().toLocaleString(),
        count: allCars.length,
        data: allCars
      });
    });
};



const destroy = (req, res) => {
  db.Car.findByIdAndDelete(req.params.id, (err, deletedCar) => {
    if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });

    res.status(200).json({ status: 200, data: deletedCar })
  });
}




  
  //SALES API ROUTES------------------------------------------------------
  
  // SHOW ALL SALES
  const indexSale = (req, res) => {
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
  };
  
  // SHOW SINGLE SALE
  const showSale = (req, res) => {
    db.Sales.findById({ id: req.params.id }, (error, foundSale) => {
      if (error) return console.log(error);
      res.json({
        status: 200,
        message: "Show a single sale",
        requestedAt: new Date().toLocaleString(),
        data: foundSale
      });
    });
  };
  
  // CREATE NEW SALE
  const createSale = (req, res) => {
    db.Sales.create(req.body, (error, createdSale) => {
      if (error) return console.log(error);
      res.json({
        status: 201,
        message: "Create new sale",
        requestedAt: new Date().toLocaleString(),
        data: createdSale
      });
    });
  };

  const destroySale = (req, res) => {
    db.Sales.findByIdAndDelete(req.params.id, (err, deletedCar) => {
      if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });
  
      res.status(200).json({ status: 200, data: deletedCar })
    });
  }


module.exports = {
  create,
  show,
  index,
  destroy,
  indexSale,
  showSale,
  createSale,
  destroySale,
}
