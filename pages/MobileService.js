import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextMobileService: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextMobileService, 'Daihatsu Mobile Service');
};

export const verifyMobileService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/mobile-service');
};
