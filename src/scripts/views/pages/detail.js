import UrlParser from '../../routes/url-parser';
import DicodingRestaurantAPISource from '../../data/dicoding-restaurant-api-source';
import { createRestaurantDetailsTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantAPISource.restaurantDetails(url.id);
    const hero = document.querySelector('#hero');
    const restaurantContainer = document.querySelector('#restaurant');
    hero.style.display = 'none';
    restaurantContainer.innerHTML = createRestaurantDetailsTemplate(restaurant);
  },
};

export default Detail;
