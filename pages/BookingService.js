/* eslint-disable import/order */
/* eslint-disable no-useless-escape */
import * as base from '../common/base-functions';
import { client } from 'nightwatch-api/lib';
// const { client } = require('nightwatch-api');

const element = {
  TextBookingService: '.info-text',
  header: '.heading.mob-heading.one',

  detailService: '.__form-title:nth-child(4)',
  dropdownSearch: '.select2-search__field',
  dropdownModel: '#addnew-address div:nth-child(1) > div > div > div > div > span > span.selection > span',
  dropdownTahun: '#addnew-address div:nth-child(2) > div > div > div > div > span > span.selection > span',
  nopol: '#policeNo',
  dropdownKategori: '#detailSevices div:nth-child(9) .selection > span',

  notes: '#notes',
  dropdownOutlet: '#book-service-branch .selection > span',
  tanggal: '#callDate',
  pilihTanggal: 'tr:not(.disabled):nth-child(5) .day:not(.disabled):nth-child(7)',
  dropdownJam: '#detailSevices > div:nth-child(15) > div:nth-child(2) span.selection > span',
  pilihJam: '.select2-results__option:nth-child(2)',

  optionDropdown: '.select2-results__option',

  detailInfoPemesan: '.__form-title:nth-child(2)',
  nama: '#detailCustomers > div:nth-child(6) > div.col-sm-12.col-md-12.col-lg-12 > div > div > .form-control',
  nomorHP: '#service-mobileNumber',
  email: '#service-email',
  buttonOTP: '.otp-body .otp-btn',
  otp: '.otp-text',
  btnBooking: '.booking-btn #verify_bookservice_otp',

  modelValid: '#addnew-address .error:nth-child(3)',
  tahunValid: '#addnew-address > div > div:nth-child(2) > div > label.error',
  nopolValid: '#addnew-address .error:nth-child(4)',
  kategoriValid: '.field-box .error:nth-child(3)',
  outletValid: '.service-branchlocation .error:nth-child(3)',
  tanggalValid: '#dob-datepickers .error:nth-child(4)',
  jamValid: '#detailSevices > div:nth-child(15) > div:nth-child(2) label.error',
  namaValid: '.row:nth-child(6) .error:nth-child(4)',
  hpValid: '.row:nth-child(7) .error:nth-child(4)',
  emailValid: '.row:nth-child(8) .error:nth-child(4)',
  otpValid: '.otp-error-section #invalid_otp:nth-child(2)',

  invalidNama: '.error:nth-child(4)',
  invalidEmail: '#detailCustomers .error-element .error:nth-child(4)',
};

const setObjectMappingDropdown = () => ({
  model: element.dropdownModel,
  tahun: element.dropdownTahun,
  kategori: element.dropdownKategori,
  outlet: element.dropdownOutlet,
  tanggal: element.tanggal,
  jam: element.dropdownJam,
});

const setObjectMappingValue = () => ({
  pilihtanggal: element.pilihTanggal,
  pilihjam: element.pilihJam,
});

// pages
export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextBookingService, 'Booking Service');
};

export const verifyBookingService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/book-service');
};

// Detail Servis

export const ketikDropDown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(element.dropdownSearch, value);
};

export const nopolMobil = async (nopol) => {
  await base.setValueElement(element.nopol, nopol);
};

export const noteService = async (catatan) => {
  await base.setValueElement(element.notes, catatan);
};

export const ChooseOptionDropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(5000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
  client.pause(1000);
};

// Detail Informasi Pemesan

export const scrolltoTitle2 = async () => {
  await base.scrollToElement(element.detailInfoPemesan);
  client.pause(1000);
};

export const detailInfoPemesan = async () => {
  await base.assertContainsText(element.detailInfoPemesan, 'Detail Informasi Pemesan');
};

export const detailPemesan = async (nama, hp, email) => {
  await base.scrollToElement(element.nomorHP);
  await base.clickElement(element.nama);
  await base.setValueElement(element.nama, nama);
  await base.setValueElement(element.nomorHP, hp);
  await base.setValueElement(element.email, email);
};

export const otp = async (OTP) => {
  await base.setValueElement(element.otp, OTP);
};

export const submit = async () => {
  await base.clickElement(element.btnBooking);
};

// Negative

export const btnOTP = async () => {
  // await base.clickElement(element.btnBooking);
  await base.scrollToElement(element.detailInfoPemesan);
  await client.pause(2000);
  await base.clickElement(element.buttonOTP);
  await client.pause(3000);
};

export const allValidation = async (validation) => {
  await base.scrollToElement(element.detailService);
  await base.assertContainsText(element.modelValid, validation);
  await base.assertContainsText(element.tahunValid, validation);
  await base.assertContainsText(element.nopolValid, validation);
  await base.assertContainsText(element.kategoriValid, validation);
  await base.assertContainsText(element.outletValid, validation);
  await base.assertContainsText(element.tanggalValid, validation);
  await base.assertContainsText(element.jamValid, validation);
  await base.assertContainsText(element.namaValid, validation);
  await base.assertContainsText(element.hpValid, validation);
  await base.assertContainsText(element.emailValid, validation);
};

export const clickKategori = async () => {
  await base.scrollToElement(element.notes);
  await base.clickElement(element.dropdownKategori);
};

export const clickJam = async () => {
  await base.scrollToElement(element.nama);
  await base.clickElement(element.dropdownJam);
};

export const optionResult = async (option) => {
  await base.assertContainsText(element.optionDropdown, option);
};

export const OTPValidation = async (OTP) => {
  await base.assertContainsText(element.otpValid, OTP);
};

export const HPValidation = async (HP) => {
  await base.assertContainsText(element.hpValid, HP);
};

export const NamaValidation = async (nama) => {
  await base.assertContainsText(element.invalidNama, nama);
};

export const EmailValidation = async (email) => {
  await base.assertContainsText(element.invalidEmail, email);
};
