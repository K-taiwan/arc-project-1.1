const db = require("../models");

const carsList = require("./cars.json");

db.Car.remove({}, () => {
  carsList.forEach(cars => {
    db.Car.create(cars, (error, createdCar) => {
      if (error) return console.log(error);
      console.log(createdCar);
    });
  });
});
