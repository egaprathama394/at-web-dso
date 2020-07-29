import * as about from '../pages/AylaFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Ayla in PLP Page$/, async () => {
  await about.verifyAyla();
});
