import * as base from '../common/base-functions';

const element = {
  fieldEmailForgotPassword: '.input-group .form-control.form-control',
  popUp: '.alert.alert-info.alert-dismissable.getAccAlert',
  lanjutkan: '#fgtPwd-button-send',
  popUpError: '#fgtPwd-label-error2',
  popUpError2: '#fgtPwd-label-error1',
};

export const veryfyPopUp = async () => {
  await base.assertContainsText(element.popUp, 'Instruksi pengaturan ulang password telah dikirim ke alamat email Anda. Mohon menghubungi Layanan Konsumen jika membutuhkan bantuan lebih lanjut');
};

// forgot password
export const inputEmail2 = async (email2) => {
  await base.setValueElement(element.fieldEmailForgotPassword, email2);
};

export const clickLanjutkan = async () => {
  await base.clickElement(element.lanjutkan);
};

// Negative test 1
export const verifyPopUpError = async () => {
  await base.expectVisible(element.popUpError);
};

// Negative test 2
export const verifyPopUpError2 = async () => {
  await base.expectVisible(element.popUpError2);
};
