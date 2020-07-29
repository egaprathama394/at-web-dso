// import { client } from 'nightwatch-api/lib';
import * as wish from '../pages/wishlist';

const { Then } = require('cucumber');

// PLP 1

Then(/^a customer can see the cars at Wishlist page$/, async () => {
  await wish.wishlistCar();
  await wish.resetWishlist();
});
