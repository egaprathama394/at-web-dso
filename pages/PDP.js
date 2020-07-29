import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  GambarSirion: '.container .__product-img img',
  Harga: '.price-desc',
  iconTestDrive: '.container .icon-Key',
  iconMesin: '.icon-cc',
  iconDownload: '.pdp-info-tab.scroll-section .download-doc',
  iconTransmisi: '.icon-speed2',
  iconSeat: '.icon-seats',
  iconLokasiOutlet: '.pdp-info-tab.scroll-section a[href="/in/store-finder?carType=NEWCAR"]',
  iconTenaga: '.icon-speed',
  iconPetrol: '.icon-petrol',
  SirionSTDAT: '.price-var:nth-child(1)',
  iconSimulasiKredit: 'li a[href="/in/dsoservice/credit-calculator?productCode=M804RS-GMNEMJ-KQ_DGS"]',
  SpesifikasiTeknis: '.__dropdown-content .header',
  BeritaText: '.articles_list--title',
};

export const verifyPDPSirion = async () => {
  await base.expectVisible(element.GambarSirion);
  await base.expectVisible(element.Harga);
  await base.expectVisible(element.iconTestDrive);
  await base.expectVisible(element.iconMesin);
  await base.expectVisible(element.iconLokasiOutlet);
  await base.expectVisible(element.iconSeat);
  await base.expectVisible(element.iconDownload);
  await base.expectVisible(element.iconTenaga);
  await base.expectVisible(element.iconPetrol);
  await base.assertContainsText(element.SpesifikasiTeknis, 'Spesifikasi Teknis (Varian)');
  await base.expectVisible(element.SirionSTDAT);
  await base.assertContainsText(element.BeritaText, 'Berita dan Artikel Menarik');
};

export const verifyURL = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/brand/Daihatsu/Sirion/p/M804RS-GMNEMJ-KQ_DGS');
};
