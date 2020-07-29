import * as FP from '../pages/ForgotPassword';
// import * as home from '../pages/home';
import * as head from '../pages/header';
import * as login from '../pages/login';


const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');

When(/^a customer click Lupa kata sandi$/, async () => {
  await login.clickKataSandi();
});

When(/^a customer input email '([^"]*)'$/, async (email2) => {
  await FP.inputEmail2(email2);
  await FP.clickLanjutkan();
});

Then(/^a customer can see pop up of reset password instruction$/, async () => {
  await FP.veryfyPopUp();
});

Then(/^a customer can see validation Format email salah$/, async () => {
  await FP.verifyPopUpError();
});

Then(/^a customer can see validation Field ini diperlukan$/, async () => {
  await FP.verifyPopUpError2();
});
