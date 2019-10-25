const $carGallery = $("#carGallery");

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
              <button type="button" class="btn btn-sm btn-outline-secondary"><a href="http://localhost:4000/gallery/${cars._id}?id=${cars._id}">Rent</a></button>
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

