/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
 
};

const setObjectMappingDropdown = () => ({
  model: element.optionModel,
  outlet: element.fieldAstra,
  tanggal: element.optionTanggal,
  jam: element.optionJam,
});

export const ketikdropdown = async (field, value) => {
  await base.clickElement(`${setObjectMappingDropdown()[field]}`, client);
  await base.setValueElementThenEnter(element.fieldisian, value);
};

export const testDrive = async (Nama, Email, No, Alamat, Catatan) => {
  await base.setValueElement(element.fldNama, Nama);
  await base.setValueElement(element.note, Catatan);
};
