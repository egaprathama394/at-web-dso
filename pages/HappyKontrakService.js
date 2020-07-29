import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextHappyKontrakService: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextHappyKontrakService, 'Happy Kontrak Service');
};

export const verifyHappyKontrakService = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/happy-kontrak-service');
};
