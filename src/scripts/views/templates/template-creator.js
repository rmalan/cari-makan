/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-card">
        <img class="restaurant-card-thumbnail" height="200px" src="./images/placeholder.png" alt="skeleton">
        <div class="restaurant-card-body">
          <h1 class="skeleton">Lorem ipsum dolor sit.</a></h3>
          <p class="skeleton">Lorem ipsum dolor sit adipisicing. Saepe reprehenderit magnam deserunt quibusdam explicabo.</p>
        </div>
      </div>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card">
    <img class="restaurant-card-thumbnail lazyload" height="200px"
      src="./images/placeholder.png"
      data-src="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
          : 'https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg'
      }"
      alt="${restaurant.name}" crossorigin="anonymous">
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
    alt="${restaurant.name}" crossorigin="anonymous">
    <div class="restaurant-details-content">
      <p class="restaurant-details-rating"><i class="fas fa-star"></i> ${restaurant.rating}</p>
      <p class="restaurant-details-location"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}, ${restaurant.city}</p>
      <p class="restaurant-details-description">${restaurant.description}</p>
      <h3 class="restaurant-details-sub-title">Kategori</h3>
      ${restaurant.categories
        .map(
          (category) => `
              <p class="restaurant-details-category">${category.name}</p>
            `,
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
                `,
            )
            .join('')}
        </div>
        <div class="restaurant-details-drink">
          <h4 class="menu-title"><i class="fas fa-coffee"></i> Minuman</h4>
          ${restaurant.menus.drinks
            .map(
              (drink) => `
                  <p class="menu-list">${drink.name}</p>
                `,
            )
            .join('')}
        </div>
      </div>
      <h3 class="restaurant-details-sub-title">Ulasan Pelanggan</h3>
      <div class="restaurant-review">
        ${restaurant.customerReviews
          .map(
            (review) => `
                <div class="review-container">
                  <p class="name">${review.name}</p>
                  <p class="review">${review.review}</p>
                  <small class="date"><i class="far fa-clock"></i> ${review.date}</small>
                </div>
              `,
          )
          .join('')}
      </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="like-button" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="like-button" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSkeletonRestaurantTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantDetailsTemplate,
};
