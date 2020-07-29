import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  ButtonLihatDetailPromo: '.col-md-4.col-sm-12  .promo-tile-wrapper a[href="/in/promotion-astradaihatsu"] .promo-btn-style .promo-btn.shadow-non ',
  banner: '#promo-mobile-banner',
};

export const clickOutletFooter = async () => {
  await base.expectVisible(element.ButtonLihatDetailPromo);
  await base.expectVisible(element.banner);
};

export const verifyPromo = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/promotion-list');
};
