import * as akunSaya from '../pages/akun-saya';
import * as head from '../pages/header';

const { When, Then } = require('cucumber');

Then(/^a customer can see '([^"]*)' at the welcome text$/, async (name) => {
  await akunSaya.verifyAkunSaya(name);
});

When(/^a customer try to access Wishlist page$/, async () => {
  await head.clickProfil();
  await akunSaya.clickWishlist();
});
