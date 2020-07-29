import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextBDC: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextBDC, 'Bodi & Cat');
};

export const verifyBodiDanCat = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/bodi-dan-cat');
};
