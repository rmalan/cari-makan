import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import dataRestaurants from '../DATA.json';

const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

function getRestaurants(data) {
  let restaurants = '';
  data.restaurants.forEach((restaurant) => {
    restaurants += `
            <article class="post-item">
                <img class="post-item-thumbnail"
                    src="${restaurant.pictureId}"
                    alt="${restaurant.name}">
                <div class="post-item-content">
                    <p class="post-item-rating"><i class="fas fa-star"></i> ${restaurant.rating}</p>
                    <p class="post-item-location"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
                    <h1 class="post-item-title"><a href="#">${restaurant.name}</a></h1>
                    <p class="post-item-description">${restaurant.description}</p>
                </div>
            </article>
        `;
  });

  document.getElementById('list-restaurants').innerHTML = restaurants;
}

getRestaurants(dataRestaurants);
