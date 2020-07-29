import * as about from '../pages/GranMaxBV';

const { Then } = require('cucumber');

Then(/^a guest can see GranMax Blind Van on Home page$/, async () => {
  await about.GMBV();
});
