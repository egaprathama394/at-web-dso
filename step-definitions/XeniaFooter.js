import * as about from '../pages/XeniaFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Xenia in PLP Page$/, async () => {
  await about.verifyXenia();
});
