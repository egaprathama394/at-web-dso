import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextTerios: '#plp-listing .wishlist-items:nth-child(1) #js-hover-rp ._brand-name.prod_name:nth-child(1)',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextTerios, 'Terios');
};

export const verifyTerios = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE?q=%3Arelevance%3Amodel%3ATerios');
};
