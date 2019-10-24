onSuccess = response => {
  console.log("success!");

  response.data.forEach((newSale) => {
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
      <td>${newSale.price}</td>
      <td><input type="checkbox" id="checkbox" name="checkbox" value="true"></td>
      <td><button class="update">Update</button></td>
      <td><button class="delete">Delete</button></td>
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

$('#table-body').on('click', '.update', (event) => {
  // console.log(event.target.parentNode.parentNode);
  // const id = event.target.parentNode;
  $(event.target.parentNode).replaceWith(`<p>Replaced</p>`)
  
  // const id = event.target.parentNode.parentNode.id;
  // const data = event.target.parentNode.parentNode.data;
  // console.log(id);
  // updateProfile(id, data);
  // $(event.target.parentNode.parentNode).replaceWith(a);

});

$('#table-body').on('click', '.delete', (event) => {
  console.log(event.target.parentNode.parentNode);
  // console.log(event.currentTarget.parentElement.parentElement);
  const id = event.target.parentNode.parentNode.id;
  console.log(id);
  deleteProfile(id);
  $(event.target.parentNode.parentNode).empty();
  
  // console.log(`${sales.data._id}`);
});

const updateProfile = (id, data) => {
  $.ajax({
    method: "PUT",
    url: `/api/v1/sales/${id}`,
    data: data,
    success: (res)=>{console.log(res)},
    error: (err)=>{console.log(err)},
  })
}


const deleteProfile = (id) => {
  $.ajax({
    method: "DELETE",
    url: `/api/v1/sales/${id}`,
    success: (res)=>{console.log(res)},
    error: (err)=>{console.log(err)},
  })
}



// $(".squares").on("click",".square", (event) => {
//   handlePoke(event);
// });

// const confirmPaid =  event => {
//   if(event.target.classList.contains("poked") === false){
//     $(event.target).addClass("poked").css("opacity",.3);
//   }
// };