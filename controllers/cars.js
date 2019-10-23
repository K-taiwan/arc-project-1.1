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




  
module.exports = {
  create,
  show,
  index,
  destroy,
  
}
