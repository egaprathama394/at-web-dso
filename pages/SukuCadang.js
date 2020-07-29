import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  TextSearchPart: '.slideForm span',
};

export const clickOutletFooter = async () => {
  await base.expectElementEqualText(element.TextSearchPart, 'SEARCH PART');
};

export const verifySukuCadang = async () => {
  await base.assertUrlEquals('http://daihatsu-sparepart.com/');
};
