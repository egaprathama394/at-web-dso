import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {

};

// eslint-disable-next-line import/prefer-default-export
export const LihatSemuaList = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
};
