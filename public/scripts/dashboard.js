onSuccess = response => {
  console.log("success!");

  response.data.forEach(newSale => {
    const template = `
      <tr>
      <td>${newSale.firstname}</td>
      <td>${newSale.lastName}</td>
      <td>${newSale.email}</td>
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
