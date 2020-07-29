import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  hubungiKami: '.yCmsComponent.__contact-us',
};

export const clickHubungi = async () => {
  await base.clickElement(element.hubungiKami);
};

export const verifyHubungi = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/contact-us');
};

export const verifyRiwayatHub = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/history-contact-us');
};
