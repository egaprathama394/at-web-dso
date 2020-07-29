import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  labelWelcomeMessage: '.info-text',
  wishlist: '#myAccountNav > ul > li:nth-child(4) > span > a',
  riwayatHubungi: '#myAccountNav > ul > li:nth-child(5) > span > a',
  bookmark: '#myAccountNav > ul > li:nth-child(6) > span > a',
};

// Profil

export const verifyAkunSaya = async (name) => {
  await base.expectVisible(element.labelWelcomeMessage);
  await base.assertContainsText(element.labelWelcomeMessage, name);
  await client.pause(1000);
};

// Wishlist

export const clickWishlist = async () => {
  await base.clickElement(element.wishlist);
  await base.scrollToElement(element.bookmark);
};
