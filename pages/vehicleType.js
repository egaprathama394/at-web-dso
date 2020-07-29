import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const elements = {
  menuBurger: '[data-toggle="collapse"]',

};

export const Vehicle = async () => {
  await base.clickElement(elements.menuBurger);
  client.pause(3000);
};

export const clickBurgerMenuBottom = async () => {
  await base.clickElement(elements.menuBurger);
  client.pause(1000);
};