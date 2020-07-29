import * as about from '../pages/SirionFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Sirion in PLP Page$/, async () => {
  await about.verifySirion();
});
