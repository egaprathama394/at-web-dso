/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  empty: '.empty-cart',
  iconEmpty: '.icon-Empty_bag',
  btnLanjutCari: '.button.primary-btn',
  recommendEmpty: '.empty-cart-heading.recommended-heading',

  car1: '#js-plp1',
  spekcar1: '#js-plp1 .btn-spek-plp',
  btnMintaPLP: '#js-plp1 .bestOfferButton',

  heading: '.checkout-top-header',
  btnKembali: '.back-to',

  dropMetodeBayar: '.checkout-sect:nth-child(4) .select2-selection--single',
  dropCash: '.select2-results__option:nth-child(2)',
  dropCredit: '.select2-results__option:nth-child(3)',

  dropUangMuka: '#select2-percent-container',
  dropCicilan: '#select2-years-container',
  drop50: '.select2-results__option:nth-child(2)',
  drop2Tahun: '.select2-results__option:nth-child(2)',

  btnMintaPDP: '.button-checkout:nth-child(4) #addToCartButtonBuyNow',
  btnSimulasi: '.button-checkout:nth-child(4) .btnCredit',

  email: '#email',
  hp: '#customer-mobileNumber',
  firstname: '#firstName',
  lastname: '#lastName',
  address: '#address-line1',
  outlet: '.margin-bottom-none .select2-selection--single',
  searchOutlet: '.select2-search__field',
  resultOutlet: '.select2-results__option.select2-results__message',
  btnSubmit: '#placeOrder',

  otp: '#order-otp',
  invalidOTP: '#invalid_otp .hints',
  emptyOTP: '.error-element .error:nth-child(4)',
  btnOTP: '#order_verify_otp',

  congrats: '.order-confirmation',
  orderConfirm: '.account-section div > span',

  outletValid: '.row:nth-child(4) .error:nth-child(3)',
  emailValid: '.checkout-personalinfo .background > div:nth-child(1) label.error',
  hpValid: '.row:nth-child(2) .error:nth-child(4)',
  namadpnValid: '.row:nth-child(3) .error:nth-child(4)',
  namablkgValid: '.row:nth-child(4) .error:nth-child(4)',
  alamatValid: '.row:nth-child(5) .error:nth-child(3)',

  invalidEmail: '.checkout-personalinfo .background > div:nth-child(1) label.error',
  invalidHP: '.row:nth-child(2) .error:nth-child(4)',

  confirmButton: '#addToCartConfirmButton',
};

const setObjectMappingDropdown = () => ({
  outlet: element.outlet,
  metode: element.dropMetodeBayar,
  uangmuka: element.dropUangMuka,
  cicilan: element.dropCicilan,
});

const setObjectMappingValue = () => ({
  cash: element.dropCash,
  kredit: element.dropCredit,
  DP50: element.drop50,
  cicil2tahun: element.drop2Tahun,
});

// Buy Car PLP
export const buycarPLP = async () => {
  await base.scrollToElement(element.car1);
  await base.clickElement(element.btnMintaPLP);
};

// Buy Car PDP
export const buycarPDP = async () => {
  await base.scrollToElement(element.car1);
  await base.clickElement(element.spekcar1);
};

export const ChooseOptionDropdown = async (field, value) => {
  await base.scrollToElement(element.btnSimulasi);
  client.pause(1000);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(1000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};

export const clickMintaPDP = async () => {
  await base.clickElement(element.btnMintaPDP);
};

// Checkout Form
export const checkout = async (email, hp, firstname, lastname, address) => {
  await base.setValueElement(element.email, email);
  await base.setValueElement(element.hp, hp);
  await base.setValueElement(element.firstname, firstname);
  await base.setValueElement(element.lastname, lastname);
  await base.setValueElement(element.address, address);
};

export const checkoutOutlet = async (field, value) => {
  await base.scrollToElement(element.outlet);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(element.searchOutlet, value);
};

export const submit = async (otp) => {
  await base.clickElement(element.btnSubmit);
};

export const OTP = async (otp) => {
  await base.setValueElement(element.otp, otp);
  await base.clickElement(element.btnOTP);
};

// Thank You Page
export const thanks = async () => {
  await base.assertContainsText(element.congrats, 'Selamat!');
  await base.assertContainsText(element.orderConfirm, 'Permintaan Pembelian Sahabat sudah kami terima.');
  await base.assertContainsText(element.orderConfirm, 'Staf kami akan segera menghubungi Sahabat untuk mengkonfirmasi Permintaan Pembelian Kendaraan Sahabat.');
};

// Header 2F
// Empty Cart
export const empty = async () => {
  await base.expectVisible(element.iconEmpty);
  await base.assertContainsText(element.empty, 'Keranjang belanja Anda kosong.');
  await base.assertContainsText(element.empty, 'Lakukan pencarian mobil terlebih dahulu.');
  await base.expectVisible(element.btnLanjutCari);
  await base.assertContainsText(element.recommendEmpty, 'Rekomendasi Kami');
};

// Verify Check Out Page
export const verifyCheckOut = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/checkout/multi/summary/view');
  await base.assertContainsText(element.heading, 'Check out');
};

// Back to Homepage from Check Out Page

export const back = async () => {
  await base.clickElement(element.btnKembali);
};

// Keranjang Belanja Anda berisi mobil lain -- Cart Confirmation

export const cartConfirmation = async () => {
  await base.clickElement(element.confirmButton);
};

// Negative

export const unavailableOutlet = async (outlet) => {
  await base.clickElement(element.outlet);
  await base.setValueElement(element.searchOutlet, outlet);
};

export const outletResult = async (result) => {
  await base.assertContainsText(element.resultOutlet, result);
};

export const allValidations = async (validation) => {
  await base.scrollToElement(element.outlet);
  await base.assertContainsText(element.outletValid, validation);
  await base.assertContainsText(element.emailValid, validation);
  await base.assertContainsText(element.hpValid, validation);
  await base.assertContainsText(element.namadpnValid, validation);
  await base.assertContainsText(element.namablkgValid, validation);
  await base.assertContainsText(element.alamatValid, validation);
};

export const invalidOTP = async (otp) => {
  await base.assertContainsText(element.invalidOTP, otp);
};

export const emptyOTP = async (otp) => {
  await client.pause(1000);
  await base.assertContainsText(element.emptyOTP, otp);
};

export const emailValidation = async (validation) => {
  await client.pause(1000);
  await base.assertContainsText(element.invalidEmail, validation);
};

export const hpValidation = async (validation) => {
  await client.pause(1000);
  await base.assertContainsText(element.invalidHP, validation);
};
