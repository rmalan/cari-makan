import UrlParser from '../../routes/url-parser';
import DicodingRestaurantAPISource from '../../data/dicoding-restaurant-api-source';
import { createRestaurantDetailsTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="like-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantAPISource.restaurantDetails(url.id);
  
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailsTemplate(restaurant);
    console.log(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      }
    });
  },
};

export default Detail;
