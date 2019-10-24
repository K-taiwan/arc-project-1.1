onSuccess = response => {
  console.log("success!");

  response.data.forEach((newSale, cars) => {
    const template = `
      <tr>
      <button>Delete</button>
      <td>${newSale.firstName}</td>
      <td>${newSale.lastName}</td>
      <td>${newSale.email}</td>
      <td>${newSale.birthDate}</td>
      <td>${newSale.phone}</td>
      <td>${newSale.address}</td>
      <td>${newSale.country}</td>
      <td>${newSale.state}</td>
      <td>${newSale.zip}</td>
      <td>${newSale.paymentMethod}</td>
      <td>${newSale.nameOnCard}</td>
      <td>${newSale.cardNum}</td>
      <td>${newSale.expDate}</td>
      <td>${newSale.cvv}</td>
      <td>${newSale.carId}</td>
      <td>${newSale.price}</td>
      </tr>
      `;
    $("tbody").append(template);
  });
};

onError = () => {
  console.log("err");
};

$.ajax({
  method: "GET",
  url: "http://localhost:4000/api/v1/sales",
  success: onSuccess,
  error: onError
});

$("button").click(function() {
  event.preventDefault();
});
