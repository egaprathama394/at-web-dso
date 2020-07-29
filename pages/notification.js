/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

// const element = {
//   banner: '.info-text',
// };

export const verifyNotif = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/my-account/astra-notifications');
};
