import DicodingRestaurantAPISource from '../../data/dicoding-restaurant-api-source';
import {
  createSkeletonRestaurantTemplate,
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div id="hero" class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Laper Nih?</h1>
          <p class="hero-tagline">Yuk cari tempat makan terdekat</p>
        </div>
      </div>
      <div class="content">
        <div class="explore">
          <h2 class="explore-label">Makan di...</h2>
          <div id="restaurant-list" class="restaurants">
            ${createSkeletonRestaurantTemplate(20)}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantAPISource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
