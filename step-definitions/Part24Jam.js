import * as about from '../pages/Part24Jam';

const { Then } = require('cucumber');

Then(/^a guest can see content Part 24Jam Page$/, async () => {
  await about.verifyPart24Jam();
});
