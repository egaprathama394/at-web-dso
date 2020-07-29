/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  optionCity: 'span[aria-labelledby=select2-city-container]',
  optionJam: 'span[aria-labelledby=select2-testDrivetimeToCall-container]',
  btnLanjutkan: '#submittestdrive',
  fieldjam: '.select2-results__option:nth-child(2)',
  fieldisian: '.select2-search__field',
  fieldAstra: 'span[aria-labelledby=select2-branch-container]',
  isianjam: '.select2-results__option:nth-child(2)',
  btmLanjutkan: '#submittestdrive',
  tuan: '.select2-results__option:nth-child(3)',
  sbmtCO: '#addressCartSubmit',
  txtPassword: '#j_password',
  // fieldTestDrive
  fldNama: "#testDriveForm input[name='firstName']",
  fldEmail: '#service-email',
  fldHP: '#service-mobileNumber',
  optionModel: 'span[aria-labelledby=select2-testDriveproductModel-container]',
  optionLocation: 'span[aria-labelledby=select2-testDrivetestDriveAt-container]',
  optionTanggal: '[name=callDate]',
  Alamat: '[name=address]',
  note: '[name=notes]',
  optiontanggal30: '.day:not(.disabled):nth-child(2)',
  clickbtnKirim: '#submittestdrive',
  // validation
  fieldiperlukanNama: '[for="autoServiceForm.firstName"].error',
  fieldiperlukanEmail: '[for="service-email"].error',
  fieldiperlukanHP: '[for="service-mobileNumber"].error',
};

const setObjectMappingDropdown = () => ({
  model: element.optionModel,
  outlet: element.fieldAstra,
  tanggal: element.optionTanggal,
  jam: element.optionJam,
});


const setObjectMappingValue = () => ({
  tanggal2: element.optiontanggal30,
  time: element.isianjam,

});

export const verifyTestDrive = async (field, value) => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/test-drive');
};


export const ketikdropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(element.fieldisian, value);
};

export const chooseOptionDropdown = async (field, value) => {
  client.pause(2000);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(2000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
};

export const testDrive = async (Nama, Email, No) => {
  await base.setValueElement(element.fldNama, Nama);
  await base.scrollToElement(element.fldEmail);
  await base.setValueElement(element.fldEmail, Email);
  await base.scrollToElement(element.fldHP);
  await base.setValueElement(element.fldHP, No);
};

export const testDrive2 = async (Alamat) => {
  await base.scrollToElement(element.Alamat);
  await base.setValueElement(element.Alamat, Alamat);
};

export const testDrive3 = async (Catatan) => {
  await base.setValueElement(element.note, Catatan);
};

export const clickbtnKirim = async () => {
  await base.clickElement(element.clickbtnKirim);
};

export const scroll1 = async () => {
  await base.scrollToElement(element.fieldAstra);
};

export const scroll2 = async () => {
  await base.scrollToElement(element.Alamat);
};

export const scroll3 = async () => {
  await base.scrollToElement(element.Catatan);
};

export const verifyTestDriveNeg1 = async (Nama, Email, No) => {
  await base.setValueElement(element.fldNama, Nama);
  await base.scrollToElement(element.fldEmail);
  await base.setValueElement(element.fldEmail, Email);
  await base.scrollToElement(element.fldHP);
  await base.setValueElement(element.fldHP, No);
};

export const verifyTestDriveValidation = async () => {
  await base.expectVisible(element.fieldiperlukanNama);
  await base.scrollToElement(element.fldEmail);
  await base.expectVisible(element.fieldiperlukanEmail);
  await base.scrollToElement(element.fldHP);
  await base.expectVisible(element.fieldiperlukanHP);
};
