import * as about from '../pages/SigraFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Sigra in PLP Page$/, async () => {
  await about.verifySigra();
});
