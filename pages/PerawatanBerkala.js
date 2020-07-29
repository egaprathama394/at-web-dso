import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextPerawatanBerkala: 'title-purnajual',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextPerawatanBerkala, 'Perawatan Berkala');
};

export const verifyPerawatanBerkala = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/perawatan-berkala');
};
