console.log("Javascript connected...");
// INITIAL DATA

const carId = new URL(location.href).searchParams.get("id");
// const carId = new URL(location.href).searchParams.get('car');

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
// console.log(cars.data._id)
console.log(carId);
const appendChosenCar = car => {
  console.log(car);
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
              <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://localhost:4000/gallery/${car.data._id}?id=${car.data._id}">Purchase</a></button>
            </div>
            <small class="text-muted">Added ${car.data.date}</small>
          </div>
        </div>
      </div>
    </div>
  `;
  $chosenCar.append(template);
};

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

getGallery();
// FORM VALIDATION-----------------------------------------------------------------
// FIRST NAME----------------------------------------------------------------------
$("#firstName").blur(function() {
  if ($("#firstName").val().length < 2) {
    $("#firstName").addClass("is-invalid");
    // valid = false;
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
    // valid = false;
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
    // valid = false;
  } else {
    $("#birth-date").removeClass("is-invalid");
  }
});

// EMAIL---------------------------------------------------------------------------
$("#email").blur(function() {
  if (
    $("#email")
      .val()
      .includes("@") === false
  ) {
    $("#email").addClass("is-invalid");
    valid = false;
  } else {
    $("#email").removeClass("is-invalid");
  }

  if (
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
    // valid = false;
  } else {
    $("#phone").removeClass("is-invalid");
  }
});

// NAME ON CARD---------------------------------------------------------------------
$("#cc-name").blur(function() {
  if ($("#cc-name").val().length < 2) {
    $("#cc-name").addClass("is-invalid");
    // valid = false;
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
    // valid = false;
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
  if ($("#cc-expiration").val().length < 1) {
    $("#cc-expiration").addClass("is-invalid");
    // valid = false;
    return;
  } else {
    $("#cc-expiration").removeClass("is-invalid");
  }
});

// CARD CVV----------------------------------------------------------------------
$("#cc-cvv").blur(function() {
  if ($("#cc-cvv").val().length < 3 || $("#cc-cvv").val().length > 3) {
    $("#cc-cvv").addClass("is-invalid");
    // valid = false;
    return;
  } else {
    $("#cc-cvv").removeClass("is-invalid");
  }

  // for (let i = 0; i < alphabet.length; i++) {
  //   if (
  //     $("#cc-cvv")
  //       .val()
  //       .includes(alphabet[i]) === true
  //   ) {
  //     $("#cc-cvv").addClass("is-invalid");
  //     valid = true;
  //   }
  // }

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
  //   onSuccess load to success page
};

// const onError = () => {
//   console.log("error");
// };

const sendNewSale = () => {
  event.preventDefault();
  // console.log($("#cc-cvv").val());
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

      paymentMethod: "Dont't know how",
      nameOnCard: $("#cc-name").val(),
      cardNum: $("#cc-number").val(),
      expDate: $("#cc-expiration").val(),
      cvv: $("#cc-cvv").val(),
      carId: carId,
      price: "don't know either"
    },
    success: onSuccess,
    error: onError
  });
};

const validate = () => {
  console.log($("#firstName").val());
  sendNewSale();
};

// $("#confirm").on("click", () => {
//   event.preventDefault();
//   console.log("clicked");
//   if ($(".form-control").hasClass("is-invalid") == false) {
//   }
//   else {sendNewSale()}
// });

// $("#confirm").on("click", () => {
//   event.preventDefault();
//   console.log("clicked");
//   sendNewSale();
// });

$("#confirm").click(function() {
  event.preventDefault();
  validate();
});