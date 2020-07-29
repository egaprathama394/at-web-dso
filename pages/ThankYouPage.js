import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  // Booking Service
  thanksImage: '.order-confirmtation__image',
  congrats: '.congrats',
  confirm: 'div > span',
  btnBackHome: '.btn-back-home',
};


// eslint-disable-next-line import/prefer-default-export
export const thanks = async () => {
  await base.assertUrlContains('https://qa.astra-daihatsu.id/in/checkout/orderConfirmation/');
};

export const thankyouBS = async () => {
  await base.expectVisible(element.thanksImage);
  await base.assertContainsText(element.congrats, 'Selamat!');
  await base.assertContainsText(element.confirm, 'Silakan datang ke bengkel sesuai jadwal booking atau periksa order Sahabat di Halaman Akun Saya.');
  await base.expectVisible(element.btnBackHome);
};
