import * as about from '../pages/LuxioFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Luxio in PLP Page$/, async () => {
  await about.verifyLuxio();
});
