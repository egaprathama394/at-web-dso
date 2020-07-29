import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextServiceSuperCepat: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextServiceSuperCepat, 'Service Super Cepat');
};

export const verifyServiceSuperCepat = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/service-super-cepat');
};
