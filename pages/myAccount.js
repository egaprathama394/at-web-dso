/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  ND: '[name="firstName"]',
  NB: '[name="lastName"]',
  Tanggal: '[name="birthdate"]',
  submit: '.row [type="submit"]',
  optiontanggal30: '.day:not(.disabled):nth-child(2)',

};

const setObjectMappingDropdown = () => ({
  tanggal: element.Tanggal,
});


const setObjectMappingValue = () => ({
  tanggal: element.optiontanggal30,


});

export const inputMyacc = async (ND, NB) => {
  await base.setValueElement(element.ND, ND);
  await base.setValueElement(element.NB, NB);
};

export const chooseOptionDropdown = async (field, value) => {
  client.pause(2000);
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  client.pause(2000);
  await base.clickElement(`${setObjectMappingValue()[value]}`, client);
};

export const clickbtnSimpan = async () => {
  await base.clickElement(element.submit);
};
