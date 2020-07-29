import * as RTD from '../pages/TestDrive';
import * as head from '../pages/header';

const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

When(/^I inputt '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)' '([^"]*)'$/, async (model, Nama, Email, HP, outlet, Alamat, tanggal, jam, Catatan) => {
  client.pause(2000);
  await RTD.ketikdropdown('model', model);
  await RTD.testDrive(Nama, Email, HP);
  await RTD.scroll1();
  client.pause(2000);
  await RTD.ketikdropdown('outlet', outlet);
  await RTD.scroll2();
  await RTD.testDrive2(Alamat);
  await RTD.chooseOptionDropdown('tanggal', tanggal);
  client.pause(2000);
  await RTD.chooseOptionDropdown('jam', jam);
  await RTD.scroll1();
  await RTD.testDrive3(Catatan);
  await RTD.clickbtnKirim();
});

// header2B.feature
Then(/^a customer can see Test Drive Page$/, async () => {
  await RTD.verifyTestDrive();
});

When(/^I input '([^"]*)' '([^"]*)' '([^"]*)'$/, async (Nama, Email, No) => {
  await RTD.verifyTestDriveNeg1(Nama, Email, No);
});

Then(/^a customer can see Validation$/, async () => {
  await RTD.verifyTestDriveValidation();
});
