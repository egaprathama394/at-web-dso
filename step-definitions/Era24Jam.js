import * as about from '../pages/ERA24Jam';

const { Then } = require('cucumber');

Then(/^a guest can see content ERA 24 Jam Page$/, async () => {
  await about.verifyERA24Jam();
});
