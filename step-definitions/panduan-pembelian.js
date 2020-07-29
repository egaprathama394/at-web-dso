import * as panduan from '../pages/panduan-pembelian';

const { Then } = require('cucumber');

Then(/^a guest can access Panduan Pembelian Page$/, async () => {
  await panduan.verifyPanduan();
});
