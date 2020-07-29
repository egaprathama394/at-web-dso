import * as about from '../pages/MiniBusFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Mini Bus in PLP Page$/, async () => {
  await about.verifyMiniBus();
});
