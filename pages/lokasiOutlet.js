import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  OutletFooter: '.yCmsComponent > a[href="/in/store-finder?carType=NewCar"]',
  searchField1: 'span [aria-labelledby="select2-stores-container"]',
  fieldisian: '.select2-search__field',
  Bali: '.checkbox-list [value="5100"]',
  Jakarta: '.checkbox-list [value="3100"]',
  buttonPenunjukArah1: '#list-view .branch__details-content:nth-child(1) .branch__directions_btn ',

};

const setObjectMappingDropdown = () => ({
  OutletHarmoni: element.searchField1,
});

export const clickOutletFooter = async () => {
  await base.clickElement(element.OutletFooter);
};

export const verifyOutlet = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/store-finder?carType=NEWCAR');
};

// Yosua

export const ketikdropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(element.fieldisian, value);
};

export const clickKota = async () => {
  await base.clickElement(element.Bali);
  await base.clickElement(element.Jakarta);
};

export const clickPecenongan = async () => {
  await base.scrollToElement(element.Jakarta);
  await base.clickElement(element.buttonPenunjukArah1);
};
