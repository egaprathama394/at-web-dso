import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextERA24Jam: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextERA24Jam, 'ERA 24 Jam');
};

export const verifyERA24Jam = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/era-24');
};
