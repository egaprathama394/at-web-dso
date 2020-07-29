import * as about from '../pages/DaftarHarga';

const { Then } = require('cucumber');

Then(/^a guest can see content Daftar Harga Page$/, async () => {
  await about.verifyDaftarHarga();
});
