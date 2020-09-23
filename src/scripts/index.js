import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import dataRestaurants from "../DATA.json";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
});

hero.addEventListener("click", function () {
    drawer.classList.remove("open");
});

main.addEventListener("click", function () {
    drawer.classList.remove("open");
});

function getRestaurants(data) {
    let restaurants = "";
    data.restaurants.forEach((restaurant) => {
        restaurants += `
            <article class="post-item">
                <img class="post-item-thumbnail"
                    src="${restaurant.pictureId}",
                    alt="${restaurant.name}">
                <div class="post-item-content">
                    <p class="post-item-rating"><i class="fas fa-star"></i> ${restaurant.rating}</p>
                    <p class="post-item-location"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
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
