import * as about from '../pages/SimulasiKredit';

const { Then } = require('cucumber');

Then(/^a guest can see content Simulasi Kredit Page$/, async () => {
  await about.verifySimulasiKredit();
});
