import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextServiceSimulasiKredit: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextServiceSimulasiKredit, 'Simulasi Kredit');
};

export const verifySimulasiKredit = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/credit-calculator?carType=NewCar');
};
