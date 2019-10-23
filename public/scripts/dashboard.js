onSuccess = response => {
  console.log("success!");

  response.data.forEach(newSale => {
    const template = `
      <tr>
      <td>${newSale.firstName}</td>
      <td>${newSale.lastName}</td>
      <td>${newSale.email}</td>
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
