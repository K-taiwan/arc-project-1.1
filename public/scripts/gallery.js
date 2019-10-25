// const carSection = document.querySelector
// console.log("connected!");

const $carGallery = $("#carGallery");

// const handleSuccess = (cars) => {
//   cars.forEach(car => {
//     const template = `
//       <li>${cars.name} | ${cars.email}<button class="delete" id="${car._id}"></button></li>
//     `;
//     document.querySelector('.cars').insertAdjacentHTML('afterbegin', template)
//   })
// }      under the gallery html give ul class of cars. add event listener on the UL

// const getAllGallerys = () => {
//   fetch('/api/v1/gallerys', {
//     method: 'GET'
//   })
//     .then(stream => stream.json())
//     .then(res => {
//      handleSuccess(res.data);
//  })
//     .catch((err) => console.log(err));
// }

const getGallerySuccess = cars => {
  console.log(cars);
  cars.data.forEach(cars => {
    const template = `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="car-img" src="${cars.image}" alt="cars" />
        <div class="card-body">
          <h4 class="mb-4">${cars.brand}  ${cars.model}</h4>
          <p class="card-text mb-2"><strong>Year</strong>: ${cars.year}</p>
          <p class="card-text"><strong>Price</strong>: $${cars.price}</p>
          <p class="card-text"><strong>Convertible</strong>: ${cars.convertible}</p>
          <p class="card-text"><strong>Description</strong>: ${cars.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://localhost:4000/gallery/${cars._id}?id=${cars._id}">I chose you!</a></button>
            </div>
            <small class="text-muted">Added ${cars.date}</small>
          </div>
        </div>
      </div>
    </div>
  `;
    $carGallery.append(template);
  });
};
/* <div class="btn-group">
  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://localhost:4000/gallery/${cars._id}?id=${cars._id}">Purchase</a></button>
</div> */

//   const onSuccess = (gif)=>{
//     console.log(gif);
//     $('.gif-gallery').empty();
//     gif.data.forEach((data)=>{
//         const template = `<img src="${data.images.fixed_height.url}"></img>`
//         <p> dsjfhskfhsdkj</p>;
//         $('.gif-gallery').append(template);
//     });
// };
//   <div id="carGallery" class="row">
//   <div class="col-md-4">
//     <div class="card mb-4 box-shadow">
//       <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16df062408f%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16df062408f%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.75%22%20y%3D%22123.6%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
//       <div class="card-body">
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//           </div>
//           <small class="text-muted">9 mins</small>
//         </div>
//       </div>
//     </div>
//   </div>

const onError = response => {
  console.log(response);
};

const getGallery = () => {
  $.ajax({
    method: "GET",
    url: `http://localhost:4000/api/v1/cars/`,
    success: getGallerySuccess,
    error: onError
  });
};

getGallery();

// carSection.addEventListener('click', (event) => {
// const userId = event.target.id;
//   if(event.target.classList.contains('delete)) {
//   console.log('Delete CAR')
// }
// });
