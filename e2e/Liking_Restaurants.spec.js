const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorit');
});

Scenario('liking one restaurant', async (I) => {
  const noFavoritesRestaurant = await I.grabNumberOfVisibleElements(
    '.restaurant-card'
  );

  assert.strictEqual(noFavoritesRestaurant, 0);

  I.amOnPage('/');

  I.seeElement('.restaurant-card-title a');

  const firstRestaurant = locate('.restaurant-card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async (I) => {
  const noFavoritesRestaurant = await I.grabNumberOfVisibleElements(
    '.restaurant-card'
  );

  assert.strictEqual(noFavoritesRestaurant, 0);

  I.amOnPage('/');

  I.seeElement('.restaurant-card-title a');

  const firstRestaurant = locate('.restaurant-card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorit');

  assert.strictEqual(noFavoritesRestaurant, 0);
});
