import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  header: '#register-content-1 .heading',
  details: '#register-content-1 .details',
  iconFB: '#register-content-1 .icon-facebook-login',
  iconGmail: '#register-content-1 .icon-google-login',
  fieldEmail: '#register-content-1 .form-control',
  btnLanjutkan: '#register-button-next',

  fieldNama: '.relativeposition:nth-child(2) .form-control',
  fieldHP: '.allowPhonenumber',
  fieldPWD: '#password',
  btnDaftar: '.form-actions #registerChkTermsConditions',
  alert: '.alert.alert-info',
  usernameGmail: '#identifierId',
  passwordGmail: '.whsOnd.zHQkBf:nth-child(1)',
  btnNext1: '#identifierNext',
  btnNext2: '#passwordNext',

  headerForm: '#register-content-2 .heading',
  emailValid: '.error:nth-child(4)',
  nameValid: '.error:nth-child(5)',
  nameError: '.error.testDrive-label-alphaonly-error',
  hpValid: '.error-element:nth-child(1) .error:nth-child(4)',
  passwordValid: '.error-element:nth-child(1) .error:nth-child(3)',
  passwordError: '#password_text',
};

export const verifyReg = async () => {
  await base.assertContainsText(element.header, 'Daftar');
  await base.assertContainsText(element.details, 'Daftar lebih mudah dengan');
  await base.expectVisible(element.iconFB);
  await base.expectVisible(element.iconGmail);
  await base.expectVisible(element.fieldEmail);
  await base.expectVisible(element.btnLanjutkan);
};

export const registEmail = async (email) => {
  await base.setValueElement(element.fieldEmail, email);
  await base.clickElement(element.btnLanjutkan);
  await client.pause(1000);
};

export const registForm = async (name, hp, pwd) => {
  await base.setValueElement(element.fieldNama, name);
  await base.setValueElement(element.fieldHP, hp);
  await base.setValueElement(element.fieldPWD, pwd);
  await base.clickElement(element.btnDaftar);
};

export const checkEmail = async (alert) => {
  await base.assertContainsText(element.alert, alert);
  await client.pause(3000);
};


// Regist Gmail

export const clickGmail = async () => {
  await base.clickElement(element.iconGmail);
};

export const mailGmail = async (email) => {
  await base.setValueElement(element.usernameGmail, email);
  await base.clickElement(element.btnNext1);
  await client.pause(1000);
};

export const pwdGmail = async (password) => {
  await client.pause(1000);
  await base.clickElement(element.passwordGmail);
  await client.pause(1000);
  await base.setValueElement(element.passwordGmail, password);
  await base.clickElement(element.btnNext2);
};

// Click Random
export const clickRandom = async () => {
  await base.clickElement(element.header);
};

export const clickRandomForm = async () => {
  await base.clickElement(element.headerForm);
};

// Negative Regist1.feature

export const emailValidation = async (validation) => {
  await base.assertContainsText(element.emailValid, validation);
};

export const nameValidation = async (validation) => {
  // await base.clickElement(element.fieldNama);
  // await base.clickElement(element.fieldHP);
  await base.assertContainsText(element.nameValid, validation);
};

export const hpValidation = async (validation) => {
  // await base.clickElement(element.fieldHP);
  // await base.clickElement(element.fieldPWD);
  await base.assertContainsText(element.hpValid, validation);
};

export const passwordValidation = async (validation) => {
  // await base.clickElement(element.fieldPWD);
  // await base.clickElement(element.fieldHP);
  await base.assertContainsText(element.passwordValid, validation);
};

export const nameError = async (name) => {
  await base.assertContainsText(element.nameError, name);
};

export const hpError = async (hp) => {
  await base.assertContainsText(element.hpValid, hp);
};

export const passwordError = async () => {
  await base.assertContainsText(element.passwordError, 'Terlalu pendek');
};
