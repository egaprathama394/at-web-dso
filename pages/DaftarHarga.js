import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextDaftarHarga: '.info-text',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextDaftarHarga, 'Daftar Harga');
};

export const verifyDaftarHarga = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/daftar-harga');
};
