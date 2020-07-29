import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {

};

// eslint-disable-next-line import/prefer-default-export
export const TeriosList = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/brand/Daihatsu/Terios/p/F800RG-GMDFJ-HY_BRM');
};
