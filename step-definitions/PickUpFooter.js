import * as about from '../pages/PickUpFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Pick Up in PLP Page$/, async () => {
  await about.verifyPickUp();
});
