import * as about from '../pages/LihatSemuaPL';

const { Then } = require('cucumber');

Then(/^a guest can see Lihat Semua on Home page$/, async () => {
  await about.LihatSemuaList();
});
