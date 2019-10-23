const db = require("../models");

const carsList = require("./cars.json");

// removes all pokemon
db.Car.remove({}, () => {
  // loops through the json file
  carsList.forEach(cars => {
    // for each one creates a pokemon entry in the DB
    db.Car.create(cars, (error, createdCar) => {
      if (error) return console.log(error);
      console.log(createdCar);
    });
  });
});
