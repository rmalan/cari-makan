import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card">
    <img class="restaurant-card-thumbnail"
      src="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
          : 'https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg'
      }"
      alt="${restaurant.name}">
    <div class="restaurant-card-body">
      <p class="restaurant-card-rating"><i class="fas fa-star"></i> ${restaurant.rating}</p>
      <p class="restaurant-card-location"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
      <h1 class="restaurant-card-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
      <p class="restaurant-card-description">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailsTemplate = (restaurant) => `
  <h2 class="restaurant-details-title">${restaurant.name}</h2>
  <div class="restaurant-details">
    <img class="restaurant-details-thumbnail"
    src="${
      restaurant.pictureId
        ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
        : 'https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg'
    }"
    alt="${restaurant.name}">
    <div class="restaurant-details-content">
      <p class="restaurant-details-rating"><i class="fas fa-star"></i> ${restaurant.rating}</p>
      <p class="restaurant-details-location"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}, ${restaurant.city}</p>
      <p class="restaurant-details-description">${restaurant.description}</p>
      <h3 class="restaurant-details-sub-title">Kategori</h3>
      ${restaurant.categories
        .map(
          (category) => `
              <p class="restaurant-details-category">${category.name}</p>
            `
        )
        .join('')}
      <h3 class="restaurant-details-sub-title">Menu</h3>
      <div class="restaurant-details-menu">
        <div class="restaurant-details-food">
          <h4 class="menu-title"><i class="fas fa-utensils"></i> Makanan</h4>
          ${restaurant.menus.foods
            .map(
              (food) => `
                  <p class="menu-list">${food.name}</p>
                `
            )
            .join('')}
        </div>
        <div class="restaurant-details-drink">
          <h4 class="menu-title"><i class="fas fa-coffee"></i> Minuman</h4>
          ${restaurant.menus.drinks
            .map(
              (drink) => `
                  <p class="menu-list">${drink.name}</p>
                `
            )
            .join('')}
        </div>
      </div>
      <h3 class="restaurant-details-sub-title">Ulasan Pelanggan</h3>
      <div class="restaurant-review">
        ${restaurant.consumerReviews
          .map(
            (review) => `
                <div class="review-container">
                  <p class="name">${review.name}</p>
                  <p class="review">${review.review}</p>
                  <small class="date"><i class="far fa-clock"></i> ${review.date}</small>
                </div>
              `
          )
          .join('')}
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="like-button" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="like-button" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantDetailsTemplate,
};
