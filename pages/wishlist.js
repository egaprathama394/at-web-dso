import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  wishAyla: '#js-plp1 ._brand-name.prod_name.hidden:nth-child(3)',
  wishSigra: '#js-plp2 ._brand-name.prod_name.hidden:nth-child(3)',
  reset: '.wishlist--clearAll .link--gray',
};

// Verify Wishlist
export const verifyWishlist = async (name) => {
  await base.expectVisible(element.labelWelcomeMessage);
  await base.assertContainsText(element.labelWelcomeMessage, name);
  await client.pause(1000);
};

// Wishlist Car
export const wishlistCar = async () => {
  await base.assertContainsText(element.wishAyla, 'Astra Daihatsu Ayla');
  await base.assertContainsText(element.wishSigra, 'Astra Daihatsu Sigra');
};

// Unchecked Wishlist
export const resetWishlist = async () => {
  await base.clickElement(element.reset);
};
