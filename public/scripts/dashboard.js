onSuccess = response => {
  console.log("success!");

  response.data.forEach(newSale => {
    const template = `
      <tr>
      <td>${newSale.name}</td>
      <td>${newSale.email}</td>
      <td>${newSale.phone}</td>
      <td>${newSale.paymentMethod}</td>
      <td>${newSale.cardNum}</td>
      <td>${newSale.cvv}</td>
      <td>${newSale.price}</td>
      <td>${newSale.birthDate}</td>
      </tr>
      `;
    $("#dashboard").append(template);
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
