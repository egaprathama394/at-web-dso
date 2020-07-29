import * as reg from '../pages/register';
import * as head from '../pages/header';

const randomstring = require('randomstring');
const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

When(/^a guest try to access Register page$/, async () => {
  await head.clickMenuDaftar();
});

Then(/^a guest can see Register page$/, async () => {
  await reg.verifyReg();
});

When(/^a guest try to regist through Google$/, async () => {
  await head.clickMenuDaftar();
  await reg.clickGmail();
  await client.url('https://accounts.google.com/signin/oauth/identifier?client_id=866321520023-6nn6rqmfs0b5ri8b4f47057naftdhr20.apps.googleusercontent.com&as=AvomXNiDOSfeND-RaqFINw&destination=https%3A%2F%2Fqa.astra-daihatsu.id&approval_state=!ChRocjJ0Z2pJVTZiZGFYczdaLWE0SRIfZ19hNUFrRGpZTTRlOEhuU1JuY2dubXJleTZGZkFCYw%E2%88%99AJDr988AAAAAXjgYsqYoNhKDHZk4GRxBYQbrZTaSUNCY&oauthgdpr=1&xsrfsig=ChkAeAh8T8DCA5hz0Zkov__wET1FzjZ5snqREg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow');
});

When(/^a guest try to regist using email '([^"]*)'$/, async (email) => {
  await reg.registEmail(email);
});

When(/^a guest try to regist using random email$/, async () => {
  const email = `tebitest${randomstring.generate(5)}@gmail.com`;
  await reg.registEmail(email);
});

When(/^a guest try to fill registration form using '([^"]*)' '([^"]*)' '([^"]*)'$/, async (name, hp, pwd) => {
  await reg.registForm(name, hp, pwd);
});

Then(/^a guest can see alert '([^"]*)'$/, async (alert) => {
  await reg.checkEmail(alert);
});

When(/^a guest try to regist using Facebook '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await head.verifyIconUser();
  await head.clickMenuLogin();
  await reg.loginFB(email, password);
});

When(/^a guest try to regist using Google '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await reg.mailGmail(email);
  await reg.pwdGmail(password);
});

When(/^a guest try to click random$/, async () => {
  await reg.clickRandom();
});

Then(/^a guest can see validation '([^"]*)'$/, async (validation) => {
  await reg.emailValidation(validation);
});

Then(/^a guest can see validation '([^"]*)' at all fields$/, async (validation) => {
  await reg.nameValidation(validation);
  await reg.hpValidation(validation);
  await reg.passwordValidation(validation);
});

Then(/^a guest can see validation '([^"]*)' at Nama Lengkap field$/, async (name) => {
  await reg.nameError(name);
});

Then(/^a guest can see validation '([^"]*)' at Nomor Handphone field$/, async (hp) => {
  await reg.hpError(hp);
});

Then(/^a guest can see validation at Password field$/, async () => {
  await reg.passwordError();
});

// Negative

When(/^a guest try to click random at the form$/, async () => {
  await reg.clickRandomForm();
});
