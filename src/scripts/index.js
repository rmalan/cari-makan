import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import dataRestaurants from "../DATA.json";

console.log('Hello Coders! :)');

function getRestaurants(data) {
    let restaurants = "";
    data.restaurants.forEach((restaurant) => {
        restaurants += `
            <article class="post-item">
                <img class="post-item-thumbnail"
                    src="${restaurant.pictureId}",
                    alt="${restaurant.name}">
                <div class="post-item-content">
                    <p class="post-item-date">About 10 Hours Ago By <a href="#" class="post-item-date-author">Aditya
                        Tri Nugroho</a>
                    </p>
                    <h1 class="post-item-title"><a href="#">${restaurant.name}</a>
                    </h1>
                    <p class="post-item-description">${restaurant.description}</p>
                </div>
            </article>
        `;
    });

    document.getElementById("list-restaurants").innerHTML = restaurants;
}

getRestaurants(dataRestaurants);