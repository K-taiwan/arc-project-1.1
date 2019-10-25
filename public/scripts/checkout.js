console.log("Javascript connected...");

const carId = new URL(location.href).searchParams.get("id");

let price = 0;

const onError = response => {
  console.log(response);
};

const getGallery = () => {
  $.ajax({
    method: "GET",
    url: `/api/v1/cars/${carId}`,
    success: appendChosenCar,
    error: onError
  });
};

let iChars = [
  "˜",
  "`",
  "!",
  "#",
  "$",
  "%",
  "ˆ",
  "&",
  "*",
  "+",
  "=",
  "-",
  "_",
  "[",
  "]",
  "/",
  ";",
  ":",
  ",",
  "{",
  "}",
  "|",
  "<",
  ">",
  "?",
  "!"
];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// APPEDN CHOSEN CAR------------------------------------------------------------------------
let $chosenCar = $("#chosenCar");
console.log(`Car Id is ${carId}`);
const appendChosenCar = car => {
  price = car.data.price;
  const template = `
    <div class="col-md-12">
      <div class="card mb-4 shadow-sm">
        <img class="car-img" src="${car.data.image}" alt="cars" />
        <div class="card-body">
          <h4 class="mb-4">${car.data.brand}  ${car.data.model}</h4>
          <p class="card-text mb-2"><strong>Year</strong>: ${car.data.year}</p>
          <p class="card-text"><strong>Price</strong>: $${car.data.price}</p>
          <p class="card-text"><strong>Convertible</strong>: ${car.data.convertible}</p>
          <p class="card-text"><strong>Description</strong>: ${car.data.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://localhost:4000/gallery">Change Vehicle</a></button>
            </div>
            <small class="text-muted">Added ${car.data.date}</small>
          </div>
        </div>
      </div>
    </div>
  `;
  $chosenCar.append(template);
};

getGallery();
// FORM VALIDATION-----------------------------------------------------------------
// FIRST NAME----------------------------------------------------------------------
$("#firstName").blur(function() {
  if ($("#firstName").val().length < 2) {
    $("#firstName").addClass("is-invalid");
  } else {
    $("#firstName").removeClass("is-invalid");
  }

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#firstName")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#firstName").addClass("is-invalid");
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (
      $("#firstName")
        .val()
        .includes(numbers[i]) === true
    ) {
      $("#firstName").addClass("is-invalid");
      valid = true;
    }
  }
});

//LAST NAME----------------------------------------------------------------------

$("#lastName").blur(function() {
  if ($("#lastName").val().length < 2) {
    $("#lastName").addClass("is-invalid");
  } else {
    $("#lastName").removeClass("is-invalid");
  }

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#lastName")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#lastName").addClass("is-invalid");
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (
      $("#lastName")
        .val()
        .includes(numbers[i]) === true
    ) {
      $("#lastName").addClass("is-invalid");
      valid = true;
    }
  }
});
// BIRTH DATE

$("#birth-date").blur(function() {
  if ($("#birth-date").val().length < 1) {
    $("#birth-date").addClass("is-invalid");
  } else {
    $("#birth-date").removeClass("is-invalid");
  }
});

// EMAIL---------------------------------------------------------------------------
$("#email").blur(function() {
  if (
    $("#email")
      .val()
      .includes("@") === false ||
    $("#email")
      .val()
      .includes(".") === false
  ) {
    $("#email").addClass("is-invalid");
    valid = false;
  } else {
    $("#email").removeClass("is-invalid");
  }
});

// PHONE--------------------------------------------------------------------------
$("#phone").blur(function() {
  if ($("#phone").val().length < 2) {
    $("#phone").addClass("is-invalid");
  } else {
    $("#phone").removeClass("is-invalid");
  }
});

// NAME ON CARD---------------------------------------------------------------------
$("#cc-name").blur(function() {
  if ($("#cc-name").val().length < 2) {
    $("#cc-name").addClass("is-invalid");
  } else {
    $("#cc-name").removeClass("is-invalid");
  }

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#cc-name")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#cc-name").addClass("is-invalid");
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (
      $("#cc-name")
        .val()
        .includes(numbers[i]) === true
    ) {
      $("#cc-name").addClass("is-invalid");
      valid = true;
    }
  }
});

// CARD NUMBER----------------------------------------------------------------------

$("#cc-number").blur(function() {
  if ($("#cc-number").val().length < 10) {
    $("#cc-number").addClass("is-invalid");
    return;
  } else {
    $("#cc-number").removeClass("is-invalid");
  }

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#cc-number")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#cc-number").addClass("is-invalid");
    }
  }
});

// EXPIRATION DATE------------------------------------------------------------------
$("#cc-expiration").blur(function() {
  if ($("#cc-expiration").val().length != 4) {
    $("#cc-expiration").addClass("is-invalid");
    return;
  } else {
    $("#cc-expiration").removeClass("is-invalid");
  }
});

// CARD CVV----------------------------------------------------------------------
$("#cc-cvv").blur(function() {
  if ($("#cc-cvv").val().length < 3 || $("#cc-cvv").val().length > 3) {
    $("#cc-cvv").addClass("is-invalid");
    return;
  } else {
    $("#cc-cvv").removeClass("is-invalid");
  }

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#cc-cvv")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#cc-cvv").addClass("is-invalid");
    }
  }
});

const onSuccess = () => {
  console.log("success");
};

const sendNewSale = () => {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "http://localhost:4000/api/v1/sales",
    data: {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      birthDate: $("#birth-date").val(),
      phone: $("#phone").val(),
      address: $("#address").val(),
      country: $("#country").val(),
      state: $("#state").val(),
      zip: $("#zip").val(),
      nameOnCard: $("#cc-name").val(),
      cardNum: $("#cc-number").val(),
      expDate: $("#cc-expiration").val(),
      cvv: $("#cc-cvv").val(),
      carId: carId,
      price: price
    },
    success: onSuccess,
    error: onError
  });
};

const infoArr = [
  $("#firstName"),
  $("#lastName"),
  $("#email"),
  $("#birth-date"),
  $("#phone"),
  $("#cc-name"),
  $("#cc-number"),
  $("#cc-expiration"),
  $("#cc-cvv")
];

const authAndSendNewSale = () => {
  let valid = [];
  for (i = 0; i < infoArr.length; i++) {
    if (infoArr[i].val() == "") {
      infoArr[i].addClass("is-invalid");
      valid.push(false);
      console.log(false);
    } else {
    }

    if (infoArr[i].hasClass("is-invalid") === true) {
      valid.push(false);
      console.log(false);
    } else {
    }
  }

  if (valid.includes(false)) {
  } else {
    sendNewSale();
    window.location.href = "/success";
  }
};

$("#confirm").click(function() {
  event.preventDefault();
  authAndSendNewSale();
});
