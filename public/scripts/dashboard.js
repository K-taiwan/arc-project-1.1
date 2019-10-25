const onSuccess = response => {
  console.log("success!");

  response.data.forEach((newSale,Car) => {

    const template = `
      <tr id=${newSale._id}>
        <td>${newSale.firstName}</td>
        <td>${newSale.lastName}</td>
        <td>${newSale.email}</td>
        <td>${newSale.birthDate}</td>
        <td>${newSale.phone}</td>
        <td>${newSale.address}</td>
        <td>${newSale.country}</td>
        <td>${newSale.state}</td>
        <td>${newSale.zip}</td>
        <td>${newSale.nameOnCard}</td>
        <td>${newSale.cardNum}</td>
        <td>${newSale.expDate}</td>
        <td>${newSale.cvv}</td>
        <td>${newSale.carId}</td>
        <td>$${newSale.price}</td>
        <td><input type="checkbox" class="checkbox" name="checkbox" ${
          newSale.paymentReceived === "true" ? "checked" : ""
        } /></td>
        <td><button class="update">Update</button></td>
        <td><button class="delete">Delete</button></td>
      </tr>
      `;
    $("tbody").append(template);
    console.log(`${newSale.price}`);

  });
};

onError = () => {
  console.log("err");
};



$.ajax({
  method: "GET",
  url: "/api/v1/sales",
  success: onSuccess,
  error: onError
});

$("button").on("click", function() {
  event.preventDefault();
});

$("#table-body").on("click", ".update", event => {
  console.log("UPDATE CLICK");
  const saleId = $(event.target)
    .parent()
    .parent()
    .attr("id");
  const paymentReceivedValue = $(event.target)
    .parent()
    .siblings()
    .find(".checkbox")
    .prop("checked");
  console.log(paymentReceivedValue);

  $.ajax({
    url: `/api/v1/sales/${saleId}`,
    method: "PUT",
    data: { paymentReceived: paymentReceivedValue },
    success: res => console.log(res),
    err: err => console.log(err)
  });


});



$('#table-body').on('click', '.delete', (event) => {

  console.log(event.target.parentNode.parentNode);
  const id = event.target.parentNode.parentNode.id;
  console.log(id);
  deleteProfile(id);
  $(event.target.parentNode.parentNode).empty();


});

const updateProfile = (id, data) => {
  $.ajax({
    method: "PUT",
    url: `/api/v1/sales/${id}`,
    data: data,
    success: res => {
      console.log(res);
    },
    error: err => {
      console.log(err);
    }
  });
};

const deleteProfile = id => {
  $.ajax({
    method: "DELETE",
    url: `/api/v1/sales/${id}`,
    success: res => {
      console.log(res);
    },
    error: err => {
      console.log(err);
    }
  });
};

$("#goToHome").click(function() {
  window.location.href = "/";
});

$("#goToGallery").click(function() {
  window.location.href = "/gallery";
});

// $(".squares").on("click",".square", (event) => {
//   handlePoke(event);
// });

// const confirmPaid =  event => {
//   if(event.target.classList.contains("poked") === false){
//     $(event.target).addClass("poked").css("opacity",.3);
//   }
// };

