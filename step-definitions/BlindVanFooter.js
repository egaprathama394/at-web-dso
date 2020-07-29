import * as about from '../pages/BlindVanFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content BlinVan in PLP Page$/, async () => {
  await about.verifyBlindVan();
});
