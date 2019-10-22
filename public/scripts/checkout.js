console.log("Javascript connected...");
// INITIAL DATA
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

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

  for (let i = 0; i < iChars.length; i++) {
    if (
      $("#phone")
        .val()
        .includes(iChars[i]) === true
    ) {
      $("#phone").addClass("is-invalid");
    }
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (
      $("#phone")
        .val()
        .includes(alphabet[i]) === true
    ) {
      $("#phone").addClass("is-invalid");
      valid = true;
    }
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

  for (let i = 0; i < alphabet.length; i++) {
    if (
      $("#cc-number")
        .val()
        .includes(alphabet[i]) === true
    ) {
      $("#cc-number").addClass("is-invalid");
      valid = true;
    }
  }
});
