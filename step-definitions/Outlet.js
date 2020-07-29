import * as RTD from '../pages/TestDrive';
import * as head from '../pages/header';

const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

Then(/^a guest can see Outlet Page$/, async (model, Nama, Email, HP, outlet) => {
  await RTD.ketikdropdown('model', model);
  await RTD.testDrive(Nama, Email, HP);
});
