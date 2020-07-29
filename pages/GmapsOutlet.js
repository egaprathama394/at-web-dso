import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');


// eslint-disable-next-line import/prefer-default-export
export const clickArah = async () => {
  await base.switchWindows();
  client.pause(5000);
  await base.assertUrlContains('https://www.google.com/maps?saddr=-6.1407232,106.8802048&daddr=-8.63921,115.20797');
};
