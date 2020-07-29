import * as about from '../pages/SukuCadang';

const { Then } = require('cucumber');

Then(/^a guest can see content Suku Cadang Page$/, async () => {
  await about.verifySukuCadang();
});
