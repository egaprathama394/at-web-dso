import * as login from '../pages/login';
// import * as home from '../pages/home';
import * as head from '../pages/header';

const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

// Login 1

Then(/^a guest can see Login page$/, async () => {
  await login.verifyLoginPage();
});

When(/^a guest login using email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await head.clickMenuLogin();
  await login.inputEmail(email);
  await login.inputPassword(password);
});

// Tanpa menu login

When(/^a guest login using emaill '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.inputEmail(email);
  await login.inputPassword(password);
  await login.Submit();
});

When(/^a guest try to click eye icon$/, async () => {
  await login.clickEyeIcon();
});

Then(/^a guest can see the password$/, async () => {
  await login.revealedPassword();
});

// Logout

When(/^a customer try to logout$/, async () => {
  await head.clickMenuLogout();
});

// Login 2

When(/^a guest try to access Google$/, async () => {
  await head.clickMenuLogin();
  await login.clickGoogle();
  await client.url('https://accounts.google.com/signin/oauth/identifier?client_id=866321520023-6nn6rqmfs0b5ri8b4f47057naftdhr20.apps.googleusercontent.com&as=SljuS1l7eQV72GyhM4NcnQ&destination=https%3A%2F%2Fqa.astra-daihatsu.id&approval_state=!ChRYdUhaRXNYS3daSnRqTV9IU1cyORIfMDFNV0U1WGVHVlVUOEhuU1JuY2dubXAteHluOUFSYw%E2%88%99AJDr988AAAAAXj62hR-NjBBEY8yKiH-29H3d8IWdn3mq&oauthgdpr=1&xsrfsig=ChkAeAh8T-CK_ZEO_ZyrcjPLAx5RwANpp0ZBEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow');
});

When(/^a guest try to login using Google '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.usrGoogle(email);
  await login.pwdGoogle(password);
});

// When(/^a guest try to access Facebook$/, async () => {
//   await home.clickMenuLogin();
//   client.pause(1000);
//   await login.clickFB();
//   await client.url('https://www.facebook.com/login.php?skip_api_login=1&api_key=1948547648756171&kid_directed_site=0&app_id=1948547648756171&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.8%2Fdialog%2Foauth%3Fclient_id%3D1948547648756171%26response_type%3Dcode%26state%3Dreceivedfromfacebooktoken%26clientSecret%3D8e409b7e80bd60d6a76d40909d054bf5%26redirect_uri%3Dhttps%253A%252F%252Fqa.astra-daihatsu.id%252Ffacebook-callback%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dcecf4e1e-e9f7-4701-8f73-c0cc2a6b6479&cancel_url=https%3A%2F%2Fqa.astra-daihatsu.id%2Ffacebook-callback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dreceivedfromfacebooktoken%23_%3D_&display=page&locale=en_GB&pl_dbl=0');
// });

// When(/^a guest try to login using Facebook '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
//   await login.fillFB(email, password);
// });

// Negative Login

When(/^a guest try to click username and password fields$/, async () => {
  await login.clickUsername();
  await login.clickPassword();
});

When(/^a guest try to click MASUK$/, async () => {
  await login.clickMasuk();
});

Then(/^a guest can see validation '([^"]*)' on both fields$/, async (validation) => {
  await login.emailValidation(validation);
  await login.passwordValidation(validation);
});

When(/^a guest try to input invalid email '([^"]*)' and password '([^"]*)'$/, async (email, password) => {
  await login.inputEmail(email);
  await login.inputPassword(password);
});

Then(/^a guest can see validation '([^"]*)' and warning icon$/, async (validation) => {
  await login.emailValidation(validation);
});

Then(/^a guest can see validation '([^"]*)' on Login Page$/, async (validation) => {
  await login.loginValidation(validation);
});
