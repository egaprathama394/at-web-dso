import * as about from '../pages/ServiceSuperCepat';

const { Then } = require('cucumber');

Then(/^a guest can see content Service Super Cepat Page$/, async () => {
  await about.verifyServiceSuperCepat();
});
