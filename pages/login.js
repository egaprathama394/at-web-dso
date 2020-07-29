import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  header: '.text-left .heading',
  details: '.details',
  facebook: '.icon-facebook-login',
  google: '.icon-google-login',

  txtUsername: '#j_username',
  warningIcon: '.login-problem-logo',
  txtPassword: '#j_password',
  eyeIcon: '.icon-login-eye',
  lupasandi: 'a[href="/in/login/pw/request/external"]',
  btnMasuk: '#regular-login',

  daftar: '.login-register-link a[href="/in/register',
  usernameGoogle: '#identifierId',
  passwordGoogle: '.whsOnd.zHQkBf:nth-child(1)',
  btnNext1: '#identifierNext',
  btnNext2: '#passwordNext',
  usernameFB: '#email',
  passwordFB: '#pass',
  btnLoginFB: '#loginbutton',

  validationEmail: '.error:nth-child(4)',
  validationPassword: '.error:nth-child(3)',
  validationError: '.login-error',
  buttonSubmit: '#regular-login',

  buttonForgotPassword: 'a[href="/login/pw/request/external"]',
};

// Login -- Baby
export const verifyLoginPage = async () => {
  await base.expectVisible(element.txtUsername);
  await base.expectVisible(element.txtPassword);
  await base.expectVisible(element.btnMasuk);
};

export const inputEmail = async (email) => {
  await base.setValueElement(element.txtUsername, email);
};

export const inputPassword = async (password) => {
  await base.setValueElement(element.txtPassword, password);
};

export const clickEyeIcon = async () => {
  await base.clickElement(element.eyeIcon);
  await client.pause(3000);
};

export const revealedPassword = async () => {
  await base.expectVisible(element.txtPassword);
};

// Login Gmail - Baby
export const clickGoogle = async () => {
  await base.clickElement(element.google);
};

export const usrGoogle = async (email) => {
  await base.setValueElement(element.usernameGoogle, email);
  await base.clickElement(element.btnNext1);
  await client.pause(1000);
};

export const pwdGoogle = async (password) => {
  await client.pause(1000);
  await base.clickElement(element.passwordGoogle);
  await client.pause(1000);
  await base.setValueElement(element.passwordGoogle, password);
  await base.clickElement(element.btnNext2);
};

// // Login FB -- Baby -- Login FB belum bisa di QA
// export const clickFB = async () => {
//   await base.clickElement(element.facebook);
// };

// export const fillFB = async (email, password) => {
//   await base.setValueElement(element.usernameFB, email);
//   await base.clickElement(element.passwordFB);
//   await client.pause(1000);
//   await base.setValueElement(element.passwordFB, password);
//   await base.clickElement(element.btnNext2);
// };

// Negative Login

export const clickUsername = async () => {
  await base.clickElement(element.txtUsername);
};

export const clickPassword = async () => {
  await base.clickElement(element.txtPassword);
};

export const clickMasuk = async () => {
  await base.clickElement(element.btnMasuk);
};

export const emailValidation = async (validation) => {
  await base.assertContainsText(element.validationEmail, validation);
  await base.expectVisible(element.warningIcon);
};

export const passwordValidation = async (validation) => {
  await base.assertContainsText(element.validationPassword, validation);
};

export const loginValidation = async (validation) => {
  await base.assertContainsText(element.validationError, validation);
};

export const Submit = async () => {
  await base.clickElement(element.buttonSubmit);
};

export const clickKataSandi = async () => {
  await base.clickElement(element.buttonForgotPassword);
};
