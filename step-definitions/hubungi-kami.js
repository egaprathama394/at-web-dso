import * as hubungi from '../pages/hubungi-kami';

const { Then } = require('cucumber');

Then(/^a guest can see content menu Hubungi Kami on Footer$/, async () => {
  await hubungi.verifyHubungi();
});

// Header
Then(/^a guest can access Hubungi Kami Page$/, async () => {
  await hubungi.verifyHubungi();
});

// Header 2E
Then(/^a customer can see Riwayat Hubungi Kami Page$/, async () => {
  await hubungi.verifyRiwayatHub();
});
