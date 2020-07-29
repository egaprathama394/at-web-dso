import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  titlePLP: '.plp-title',

  sort: '.select2-selection__rendered',
  sortRelevant: '.select2-results__option:nth-child(1)',
  sortLowHigh: '.select2-results__option:nth-child(2)',
  sortHighLow: '.select2-results__option:nth-child(3)',

  titlePrice: '.js-facet:nth-child(1) ._title',
  infoPrice: '.price-desktop',

  titleCategory: '.js-facet:nth-child(2) ._title',
  citycar: '#product-facet > ul > div:nth-child(2) > div > li > ul > li:nth-child(1)',
  MPV: '#product-facet > ul > div:nth-child(2) > div > li > ul > li:nth-child(2)',
  SUV: '#product-facet > ul > div:nth-child(2) > div > li > ul > li:nth-child(3)',
  niaga: '#product-facet > ul > div:nth-child(2) > div > li > ul > li:nth-child(4)',

  titleCapacity: '.js-facet:nth-child(3) ._title',
  cc1000: '#product-facet > ul > div:nth-child(3) > div > li > ul > li:nth-child(1) > form > label',
  cc1200: '#product-facet > ul > div:nth-child(3) > div > li > ul > li:nth-child(2) > form > label',
  cc1300: '#product-facet > ul > div:nth-child(3) > div > li > ul > li:nth-child(3) > form > label',
  cc1500: '#product-facet > ul > div:nth-child(3) > div > li > ul > li:nth-child(4) > form > label',

  titleTransmisi: '.js-facet:nth-child(4) ._title',
  manual: '#product-facet > ul > div:nth-child(4) > div > li > ul > li:nth-child(1) > form > label',
  matic: '#product-facet > ul > div:nth-child(4) > div > li > ul > li:nth-child(2) > form > label',

  filterName1: '.product--filter .__filerName:nth-child(1)',
  filterName2: '.product--filter .__filerName:nth-child(2)',
  filterName3: '.product--filter .__filerName:nth-child(3)',
  filterName4: '.product--filter .__filerName:nth-child(4)',
  resetFilter: '.product--filter .link--gray',

  backtoTop: '.plp-go-to-top',

  Car1: '#js-plp1',
  favCar1: '#js-plp1 .add-to-wishlist-label',
  specCar1: '#js-plp1 .btn-spek-plp',
  offerCar1: '#js-plp1 .bestOfferButton',

  Car2: '#js-plp2',
  favCar2: '#js-plp2 .add-to-wishlist-label',
  specCar2: '#js-plp2 .btn-spek-plp',
  offerCar2: '#js-plp2 .bestOfferButton',

  Car3: '#js-plp3',
  favCar3: '#js-plp3 .add-to-wishlist-label',
  specCar3: '#js-plp3 .btn-spek-plp',
  offerCar3: '#js-plp3 .bestOfferButton',

  Car4: '#js-plp4',
  favCar4: '#js-plp4 .add-to-wishlist-label',
  specCar4: '#js-plp4 .btn-spek-plp',
  offerCar4: '#js-plp4 .bestOfferButton',

  Car5: '#js-plp5',
  favCar5: '#js-plp5 .add-to-wishlist-label',
  specCar5: '#js-plp5 .btn-spek-plp',
  offerCar5: '#js-plp5 .bestOfferButton',

  Car6: '#js-plp6',
  favCar6: '#js-plp6 .add-to-wishlist-label',
  specCar6: '#js-plp6 .btn-spek-plp',
  offerCar6: '#js-plp6 .bestOfferButton',

  Car7: '#js-plp7',
  favCar7: '#js-plp7 .add-to-wishlist-label',
  specCar7: '#js-plp7 .btn-spek-plp',
  offerCar7: '#js-plp7 .bestOfferButton',

  Car8: '#js-plp8',
  favCar8: '#js-plp8 .add-to-wishlist-label',
  specCar8: '#js-plp8 .btn-spek-plp',
  offerCar8: '#js-plp8 .bestOfferButton',

  Car9: '#js-plp9',
  favCar9: '#js-plp9 .add-to-wishlist-label',
  specCar9: '#js-plp9 .btn-spek-plp',
  offerCar9: '#js-plp9 .bestOfferButton',
};

// PLP 1
export const verifyPLP = async () => {
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.expectVisible(element.sort);

  await base.scrollToElement(element.Car1);
  await base.assertContainsText(element.Car1, 'Astra Daihatsu Ayla');
  await base.expectVisible(element.specCar1);
  await base.expectVisible(element.offerCar1);
  await client.pause(1000);

  await base.assertContainsText(element.Car2, 'Astra Daihatsu Sigra');
  await base.scrollToElement(element.Car2);
  await base.expectVisible(element.specCar2);
  await base.expectVisible(element.offerCar2);
  await client.pause(1000);

  await base.assertContainsText(element.Car3, 'Granmax Blindvan');
  await base.scrollToElement(element.Car3);
  await base.expectVisible(element.specCar3);
  await base.expectVisible(element.offerCar3);
  await client.pause(1000);

  await base.assertContainsText(element.Car4, 'Granmax Minibus');
  await base.scrollToElement(element.Car4);
  await base.expectVisible(element.specCar4);
  await base.expectVisible(element.offerCar4);
  await client.pause(1000);

  await base.expectVisible(element.titlePrice);
  await base.expectVisible(element.infoPrice);
  await base.expectVisible('#slider-range span:nth-child(3)');

  await base.clickElement(element.titleCategory);
  await base.expectVisible(element.citycar);
  await base.expectVisible(element.MPV);
  await base.expectVisible(element.SUV);
  await base.expectVisible(element.niaga);
  await client.pause(1000);

  await base.scrollToElement(element.titleTransmisi);
  await base.clickElement(element.titleCapacity);
  await base.expectVisible(element.cc1000);
  await base.expectVisible(element.cc1200);
  await base.expectVisible(element.cc1300);
  await base.expectVisible(element.cc1500);

  await base.scrollToElement(element.Car5);
  await base.assertContainsText(element.Car5, 'Granmax Pickup');
  await base.expectVisible(element.specCar5);
  await base.expectVisible(element.offerCar5);
  await client.pause(1000);

  await base.assertContainsText(element.Car6, 'Luxio');
  await base.scrollToElement(element.Car6);
  await base.expectVisible(element.specCar6);
  await base.expectVisible(element.offerCar6);
  await client.pause(1000);

  await base.assertContainsText(element.Car7, 'Sirion');
  await base.scrollToElement(element.Car7);
  await base.expectVisible(element.specCar7);
  await base.expectVisible(element.offerCar7);
  await client.pause(1000);

  await base.assertContainsText(element.Car8, 'Terios');
  await base.scrollToElement(element.Car8);
  await base.expectVisible(element.specCar8);
  await base.expectVisible(element.offerCar8);
  await client.pause(1000);

  await base.clickElement(element.titleTransmisi);
  await base.expectVisible(element.manual);
  await base.expectVisible(element.matic);
  await client.pause(1000);

  await base.scrollToElement(element.Car9);
  await base.assertContainsText(element.Car9, 'Xenia');
  await base.expectVisible(element.specCar9);
  await base.expectVisible(element.offerCar9);
  await client.pause(1000);

  await base.scrollToElement(element.backtoTop);
  await base.clickElement(element.backtoTop);
  await client.pause(3000);
};

// PLP 2 - Filter Kategori
export const filterKategori = async () => {
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.titleCategory);
  await base.clickElement(element.citycar);
  await base.clickElement(element.SUV);
  await base.assertContainsText(element.filterName1, 'City Car');
  await base.assertContainsText(element.filterName2, 'SUV');
  await base.assertContainsText(element.titlePLP, 'Menampilkan 3');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.resetFilter);
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
};

// PLP 2 - Filter Kapasitas
export const filterKapasitas = async () => {
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.titleCapacity);
  await base.clickElement(element.cc1000);
  await base.scrollToElement(element.titlePLP);
  await base.assertContainsText(element.filterName1, '1000 cc');
  await base.assertContainsText(element.titlePLP, 'Menampilkan 13');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.resetFilter);
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
};

// PLP 2 - Filter Transmisi
export const filterTransmisi = async () => {
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.titleTransmisi);
  await base.scrollToElement(element.matic);
  await base.clickElement(element.manual);
  await base.scrollToElement(element.titlePLP);
  await base.assertContainsText(element.filterName1, 'Manual');
  await base.assertContainsText(element.titlePLP, 'Menampilkan 40');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
  await base.clickElement(element.resetFilter);
  await base.assertContainsText(element.titlePLP, 'Menampilkan 9');
  await base.assertContainsText(element.titlePLP, 'Kendaraan');
};

// PLP 3 - Sort Relevant
export const sortRelevant = async () => {
  await base.clickElement(element.sort);
  await base.clickElement(element.sortLowHigh);
  await base.clickElement(element.sort);
  await base.clickElement(element.sortRelevant);
  await base.assertContainsText(element.Car1, 'Rp 101.650.000');
  await base.assertContainsText(element.Car2, 'Rp 117.500.000');
  await base.assertContainsText(element.Car3, 'Rp 153.025.000');
  await base.assertContainsText(element.Car4, 'Rp 170.875.000');
  await base.assertContainsText(element.Car5, 'Rp 141.400.000');
  await base.assertContainsText(element.Car6, 'Rp 202.700.000');
  await base.assertContainsText(element.Car7, 'Rp 200.100.000');
  await base.assertContainsText(element.Car8, 'Rp 208.300.000');
  await base.assertContainsText(element.Car9, 'Rp 190.650.000');
};

// PLP 3 - Sort Low to High
export const sortLowHigh = async () => {
  await base.clickElement(element.sort);
  await base.clickElement(element.sortRelevant);
  await base.clickElement(element.sort);
  await base.clickElement(element.sortLowHigh);
  await base.assertContainsText(element.Car1, 'Rp 101.650.000');
  await base.assertContainsText(element.Car2, 'Rp 117.500.000');
  await base.assertContainsText(element.Car3, 'Rp 141.400.000');
  await base.assertContainsText(element.Car4, 'Rp 153.025.000');
  await base.assertContainsText(element.Car5, 'Rp 170.875.000');
  await base.assertContainsText(element.Car6, 'Rp 190.650.000');
  await base.assertContainsText(element.Car7, 'Rp 200.100.000');
  await base.assertContainsText(element.Car8, 'Rp 202.700.000');
  await base.assertContainsText(element.Car9, 'Rp 208.300.000');
};

// PLP 3 - Sort High to Low
export const sortHighLow = async () => {
  await base.clickElement(element.sort);
  await base.clickElement(element.sortRelevant);
  await base.clickElement(element.sort);
  await base.clickElement(element.sortHighLow);
  await base.assertContainsText(element.Car1, 'Rp 208.300.000');
  await base.assertContainsText(element.Car2, 'Rp 202.700.000');
  await base.assertContainsText(element.Car3, 'Rp 200.100.000');
  await base.assertContainsText(element.Car4, 'Rp 190.650.000');
  await base.assertContainsText(element.Car5, 'Rp 170.875.000');
  await base.assertContainsText(element.Car6, 'Rp 153.025.000');
  await base.assertContainsText(element.Car7, 'Rp 141.400.000');
  await base.assertContainsText(element.Car8, 'Rp 117.500.000');
  await base.assertContainsText(element.Car9, 'Rp 101.650.000');
};

// PLP 1 - Wishlist
export const clickWishlist = async () => {
  await base.clickElement(element.favCar1);
  await base.clickElement(element.favCar2);
  await client.pause(1000);
};

// PLP 4 - Filter Harga
export const priceFilter1 = async () => {
  await client.moveToElement('#slider-range span:nth-child(3)', 10, 10);
  await client.mouseButtonDown(0);
  await client.pause(2000);
  await client.moveToElement('#slider-range span:nth-child(3)', -105, 0);
  await client.pause(2000);
  await client.mouseButtonUp(0);
  await client.pause(2000);
};

export const priceFilter2 = async () => {
  await client.moveToElement('#slider-range span:nth-child(2)', 10, 10);
  await client.mouseButtonDown(0);
  await client.pause(2000);
  await client.moveToElement('#slider-range span:nth-child(2)', 100, 0);
  await client.pause(2000);
  await client.mouseButtonUp(0);
  await client.pause(2000);
};

export const priceFilter3 = async () => {
  await client.moveToElement('#slider-range span:nth-child(2)', 10, 10);
  await client.mouseButtonDown(0);
  await client.pause(2000);
  await client.moveToElement('#slider-range span:nth-child(2)', 100, 0);
  await client.pause(2000);
  await client.mouseButtonUp(0);
  await client.pause(2000);

  await client.moveToElement('#slider-range span:nth-child(3)', 10, 10);
  await client.mouseButtonDown(0);
  await client.pause(2000);
  await client.moveToElement('#slider-range span:nth-child(3)', -75, 0);
  await client.pause(2000);
  await client.mouseButtonUp(0);
  await client.pause(2000);
};

export const filterHarga = async (breadcrumb) => {
  await base.assertContainsText(element.filterName1, breadcrumb);
};

