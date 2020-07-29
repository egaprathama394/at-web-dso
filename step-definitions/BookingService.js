import * as BS from '../pages/BookingService';
import * as head from '../pages/header';

const { When, Then } = require('cucumber');

Then(/^a guest can see content Booking Service Kami Page$/, async () => {
  await BS.verifyBookingService();
});

// Click Booking Service through Header 2

When(/^a customer try to access Booking Service Page$/, async () => {
  await head.clickBookService();
});

Then(/^a customer can see Booking Service Page$/, async () => {
  await BS.verifyBookingService();
});

// Form Booking Service

When(/^a customer try to fill Detail Servis '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (model, tahun, nopol, kategori, catatan, outlet, tanggal, jam) => {
  await BS.ketikDropDown('model', model);
  await BS.ketikDropDown('tahun', tahun);
  await BS.nopolMobil(nopol);
  await BS.ketikDropDown('kategori', kategori);
  await BS.noteService(catatan);
  await BS.ketikDropDown('outlet', outlet);
  await BS.scrolltoTitle2();
  await BS.ChooseOptionDropdown('tanggal', tanggal);
  await BS.ChooseOptionDropdown('jam', jam);
});

When(/^a customer try to fill Detail informasi Pemesan '([^"]*)' '([^"]*)' '([^"]*)'$/, async (nama, hp, email) => {
  await BS.detailPemesan(nama, hp, email);
});

When(/^a customer try to input OTP '([^"]*)'$/, async (OTP) => {
  await BS.otp(OTP);
});

When(/^a customer try to submit Booking Service form$/, async () => {
  await BS.submit();
});

// Negative

When(/^a customer try to click button KIRIM KODE$/, async () => {
  await BS.btnOTP();
});

Then(/^a customer can see validation '([^"]*)' at any fields$/, async (validation) => {
  await BS.allValidation(validation);
});

When(/^a customer try click Kategori Servis dropdown on Detail Servis$/, async () => {
  await BS.clickKategori();
});

When(/^a customer try click Jam dropdown on Detail Servis$/, async () => {
  await BS.clickJam();
});

Then(/^a customer can see wording '([^"]*)'$/, async (option) => {
  await BS.optionResult(option);
});

When(/^a customer try to fill '([^"]*)' at Model dropdown on Detail Servis$/, async (model) => {
  await BS.ketikDropDown('model', model);
});

When(/^a customer try to fill '([^"]*)' at Tahun dropdown on Detail Servis$/, async (tahun) => {
  await BS.ketikDropDown('tahun', tahun);
});

When(/^a customer try to fill '([^"]*)' at Kategori Servis dropdown on Detail Servis$/, async (kategori) => {
  await BS.ketikDropDown('kategori', kategori);
});

When(/^a customer try to fill fields '([^"]*)' '([^"]*)' '([^"]*)'$/, async (model, tahun, nopol) => {
  await BS.ketikDropDown('model', model);
  await BS.ketikDropDown('tahun', tahun);
  await BS.nopolMobil(nopol);
});

Then(/^a customer can see wording '([^"]*)' at OTP field$/, async (OTP) => {
  await BS.OTPValidation(OTP);
});

Then(/^a customer can see wording '([^"]*)' at Nomor Handphone field$/, async (HP) => {
  await BS.HPValidation(HP);
});

Then(/^a customer can see wording '([^"]*)' at Nama field$/, async (nama) => {
  await BS.NamaValidation(nama);
});

Then(/^a customer can see wording '([^"]*)' at Email field$/, async (email) => {
  await BS.EmailValidation(email);
});
