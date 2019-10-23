const db = require("../models");

//SALES API ROUTES------------------------------------------------------

// SHOW ALL SALES
const index = (req, res) => {
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
const show = (req, res) => {
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
const create = (req, res) => {
  console.log("sale post hit");
  console.log(req.body);
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

const destroy = (req, res) => {
  db.Sales.findByIdAndDelete(req.params.id, (err, deletedSale) => {
    if (err)
      res
        .status(500)
        .json({ status: 500, error: "Something went wrong please try again" });

    res.status(200).json({ status: 200, data: deletedSale });
  });
};




module.exports = {
  index,
  show,
  create,
  destroy
};
