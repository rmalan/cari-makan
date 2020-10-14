import DicodingRestaurantAPISource from '../../data/dicoding-restaurant-api-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <div class="explore">
          <h2 class="explore-label">Makan di...</h2>
          <div id="restaurant-list" class="restaurants"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantAPISource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
