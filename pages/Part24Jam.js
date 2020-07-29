import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextPart24Jam: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextPart24Jam, 'Part 24 Jam');
};

export const verifyPart24Jam = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/part-24');
};
