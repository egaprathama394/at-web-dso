import * as about from '../pages/tentang-astra';

const { Then } = require('cucumber');

Then(/^a guest can access Tentang Astra Daihatsu Page$/, async () => {
  await about.verifyTentangAstra();
});
