import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {

};

// eslint-disable-next-line import/prefer-default-export
export const SirionList = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/brand/Daihatsu/Sirion/p/M804RS-GMNEMJ-KQ_DGS');
};
