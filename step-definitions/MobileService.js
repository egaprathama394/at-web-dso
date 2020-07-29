import * as about from '../pages/MobileService';

const { Then } = require('cucumber');

Then(/^a guest can see content Mobile Service Page$/, async () => {
  await about.verifyMobileService();
});
