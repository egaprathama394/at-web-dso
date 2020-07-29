import * as about from '../pages/TeriosFooter';

const { Then } = require('cucumber');

Then(/^a guest can see content Terios in PLP Page$/, async () => {
  await about.verifyTerios();
});
