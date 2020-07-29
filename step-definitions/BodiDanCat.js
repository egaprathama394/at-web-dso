import * as about from '../pages/BodiDanCat';

const { Then } = require('cucumber');

Then(/^a guest can see content Bodi Dan Cat Page$/, async () => {
  await about.verifyBodiDanCat();
});
