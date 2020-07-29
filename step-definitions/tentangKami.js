import * as about from '../pages/TentangKami';

const { Then } = require('cucumber');

Then(/^a guest can see content menu Tentang kami on Footer$/, async () => {
  await about.verifyTentangKami();
});
