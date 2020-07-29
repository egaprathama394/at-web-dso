// import { client } from 'nightwatch-api/lib';
import * as head from '../pages/header';
import * as plp from '../pages/PLP';
import * as home from '../pages/home';

const { When, Then } = require('cucumber');

// PLP 1

When(/^a guest try to access PLP$/, async () => {
  await home.clickAllType();
});

Then(/^a guest can see PLP$/, async () => {
  await plp.verifyPLP();
});

When(/^a customer try to like a car on PLP$/, async () => {
  await home.clickAllType();
  await plp.clickWishlist();
});

// PLP 2

Then(/^a guest can see the cars filtered by category$/, async () => {
  await home.clickAllType();
  await plp.filterKategori();
});

Then(/^a guest can see the cars filtered by capacity$/, async () => {
  await home.clickAllType();
  await plp.filterKapasitas();
});

Then(/^a guest can see the cars filtered by transmision$/, async () => {
  await home.clickAllType();
  await plp.filterTransmisi();
});

// PLP 3

Then(/^a guest can see the cars sorted by Relevansi$/, async () => {
  await home.clickAllType();
  await plp.sortRelevant();
});

Then(/^a guest can see the cars sorted from low to high price$/, async () => {
  await home.clickAllType();
  await plp.sortLowHigh();
});

Then(/^a guest can see the cars sorted from high to low price$/, async () => {
  await home.clickAllType();
  await plp.sortHighLow();
});

// PLP 4

When(/^a guest try to filter car by price from Rp 0 - Rp 150 Juta$/, async () => {
  await home.clickAllType();
  await plp.priceFilter1();
});

When(/^a guest try to filter car by price from Rp 150 Juta - Rp 350 Juta$/, async () => {
  await home.clickAllType();
  await plp.priceFilter2();
});

When(/^a guest try to filter car by price from Rp 150 Juta - Rp 200 Juta$/, async () => {
  await home.clickAllType();
  await plp.priceFilter3();
});

Then(/^a guest can see price breadcrumb '([^"]*)'$/, async (breadcrumb) => {
  await plp.filterHarga(breadcrumb);
});