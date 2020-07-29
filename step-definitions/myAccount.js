import * as Account from '../pages/myAccount';

const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

When(/^a customer fill nama depan dan belakang '([^"]*)' '([^"]*)'$/, async (ND, NB) => {
  await Account.inputMyacc(ND, NB);
});

When(/^a customer fill date '([^"]*)'$/, async (tanggal) => {
  await Account.chooseOptionDropdown('tanggal', tanggal);
  await Account.clickbtnSimpan();
});
