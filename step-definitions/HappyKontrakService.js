import * as about from '../pages/HappyKontrakService';

const { Then } = require('cucumber');

Then(/^a guest can see content Happy Kontrak Service Page$/, async () => {
  await about.verifyHappyKontrakService();
});
