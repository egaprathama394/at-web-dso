import * as about from '../pages/PDP';

const { Then } = require('cucumber');

Then(/^a guest can see Sirion in PDP page$/, async () => {
  await about.verifyPDPSirion();
});
