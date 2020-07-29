import * as RTB from '../pages/RTB';
import * as home from '../pages/home';
import * as head from '../pages/header';

const { When, Then } = require('cucumber');

When(/^a customer try to buy car through PLP$/, async () => {
  await home.clickAllType();
  await RTB.buycarPLP();
});

When(/^a customer try to buy car through PDP using '([^"]*)' metode$/, async (metode) => {
  await home.clickAllType();
  await RTB.buycarPDP();
  await RTB.ChooseOptionDropdown('metode', metode);
});

When(/^a customer choose '([^"]*)' and '([^"]*)'$/, async (uangmuka, cicilan) => {
  await RTB.ChooseOptionDropdown('uangmuka', uangmuka);
  await RTB.ChooseOptionDropdown('cicilan', cicilan);
});

When(/^a customer try to click Minta Penawaran on PDP$/, async () => {
  await RTB.clickMintaPDP();
});

When(/^a customer try to fill the Checkout form using '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (outlet, email, hp, firstname, lastname, address) => {
  await RTB.checkoutOutlet('outlet', outlet);
  await RTB.checkout(email, hp, firstname, lastname, address);
  await RTB.submit();
});

When(/^a customer try to fill the Informasi Pribadi form using '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (email, hp, firstname, lastname, address) => {
  await RTB.checkout(email, hp, firstname, lastname, address);
});

When(/^a customer try to choose Outlet '([^"]*)'$/, async (outlet) => {
  await RTB.checkoutOutlet('outlet', outlet);
});

When(/^a customer try to input buy car OTP '([^"]*)'$/, async (otp) => {
  await RTB.OTP(otp);
});

Then(/^a customer can see Thank You Page$/, async () => {
  await RTB.thanks();
});

// Header2F.feature
When(/^a customer back to Homepage from Checkout Page$/, async () => {
  await RTB.verifyCheckOut();
  await RTB.back();
  await head.verifyHeader2cust();
});

Then(/^a customer can see the cart is empty$/, async () => {
  await RTB.empty();
});

Then(/^a customer can see the Checkout Page$/, async () => {
  await RTB.verifyCheckOut();
});

// Negative

When(/^a customer try to find outlet '([^"]*)'$/, async (outlet) => {
  await RTB.unavailableOutlet(outlet);
});

Then(/^a customer can see result '([^"]*)' at Outlet field$/, async (result) => {
  await RTB.outletResult(result);
});

When(/^a customer try to click button Minta Penawaran at Checkout$/, async () => {
  await RTB.submit();
});

Then(/^a customer can see all validations '([^"]*)'$/, async (validation) => {
  await RTB.allValidations(validation);
});

When(/^a customer try to click YA on Cart Confirmation$/, async () => {
  await RTB.cartConfirmation();
});

Then(/^a customer can see invalid OTP validation '([^"]*)'$/, async (otp) => {
  await RTB.invalidOTP(otp);
});

Then(/^a customer can see OTP validation '([^"]*)'$/, async (otp) => {
  await RTB.emptyOTP(otp);
});

Then(/^a customer can see invalid email validation '([^"]*)'/, async (validation) => {
  await RTB.emailValidation(validation);
});

Then(/^a customer can see invalid nomor handphone validation '([^"]*)'$/, async (validation) => {
  await RTB.hpValidation(validation);
});
