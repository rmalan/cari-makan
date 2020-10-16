import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
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
          <h2 class="explore-label">Tempat Makan Favorit</h2>
          <div id="restaurant-list" class="restaurants"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
