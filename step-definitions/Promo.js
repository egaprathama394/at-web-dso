import * as about from '../pages/Promo';

const { Then } = require('cucumber');

Then(/^a guest can see content Promo Page$/, async () => {
  await about.verifyPromo();
});
