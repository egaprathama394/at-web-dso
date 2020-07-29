import { client } from 'nightwatch-api/lib';
// const { client } = require('nightwatch-api');
import * as base from '../common/base-functions';

const element = {
  mainbanner: '.slick-list.draggable:nth-child(2)',
  mainbanner1: '.simple-banner.banner__component--responsive:nth-child(3)',
  mainbanner2: '.simple-banner.banner__component--responsive:nth-child(4)',
  mainbanner3: '.simple-banner.banner__component--responsive:nth-child(5)',
  mainbanner4: '.simple-banner.banner__component--responsive:nth-child(6)',
  mainbanner5: '.simple-banner.banner__component--responsive:nth-child(7)',

  slickslide1: '#slick-slide-control00',
  slickslide2: '#slick-slide-control01',
  slickslide3: '#slick-slide-control02',
  slickslide4: '#slick-slide-control03',
  slickslide5: '#slick-slide-control04',
  slicknext: '.slick-next.slick-arrow:nth-child(3)',
  slickprev: '.slick-prev.slick-arrow:nth-child(1)',

  promoOffer: '.special-offer',
  linkPromoPage: '.link-to-promo-page',
  promo1: '.__desktop [src="https://imagesamcqa.seva.id/sys-master/images/h6a/hf0/8818441093150"]',
  promo2: '.__desktop [src="https://imagesamcqa.seva.id/sys-master/images/h11/hf3/8818441125918"]',

  // Static Cara Pesan
  caraPesan: '.heading-cara-pesan',

  cara1: '.new-to-content-outer:nth-child(1) .numbers',
  wordCara1: '.new-to-content-outer:nth-child(1) .messages',
  picCara1: '.new-to-content-outer:nth-child(1) .cara-pesan-img',

  cara2: '.new-to-content-outer:nth-child(2) .numbers',
  wordCara2: '.new-to-content-outer:nth-child(2) .messages',
  picCara2: '.new-to-content-outer:nth-child(2) .cara-pesan-img',

  cara3: '.new-to-content-outer:nth-child(3) .numbers',
  wordCara3: '.new-to-content-outer:nth-child(3) .messages',
  picCara3: '.new-to-content-outer:nth-child(3) .cara-pesan-img',

  cara4: '.new-to-content-outer:nth-child(4) .numbers',
  wordCara4: '.new-to-content-outer:nth-child(4) .messages',
  picCara4: '.new-to-content-outer:nth-child(4) .cara-pesan-img',

  // Static Purnajual
  purnajualHead: '.home-purna-jual',
  purnajualWord: '.home-purna-jual .content',
  PJ1: '.purnajual1 .image__link--secondary:nth-child(1)',
  PJ2: '.purnajual1 .image__link--secondary:nth-child(2)',
  PJ3: '.purnajual1 .image__link--secondary:nth-child(3)',
  PJ4: '.purnajual1 .image__link--secondary:nth-child(4)',
  PJ5: '.purnajual1 .image__link--secondary:nth-child(5)',
  PJ6: '.purnajual2 .image__link--secondary:nth-child(1)',
  PJ7: '.purnajual2 .image__link--secondary:nth-child(2)',
  PJ8: '.purnajual2 .image__link--secondary:nth-child(3)',
  PJ9: '.purnajual2 .image__link--secondary:nth-child(4)',
  PJ10: '.purnajual2 .image__link--secondary:nth-child(5)',

  iconSUV: '._types .image__link--secondary [href="/in/c/SUV"] div',
  iconMPV: '._types .image__link--secondary [href="/in/c/MPV"] div',
  iconKN: '._types .image__link--secondary [href="/in/c/KENDARAANNIAGA"] div',
  iconCC: '._types .image__link--secondary [href="/in/c/CITYCAR"] div',
  iconSemua: '._types .image__link--secondary [href="/in/c/TYPE"] div',
  menuAstraDaihatsu: 'li ul li:nth-child(1) .heading.footer-heading',
  Produk: 'li ul li:nth-child(2) .heading.footer-heading',
  PurnaJual: 'li ul li:nth-child(3) .heading.footer-heading',
  BeliDaihatsu: 'li ul li:nth-child(4) .heading.footer-heading',
  HubungiKamiFooter: 'li ul li:nth-child(5) .heading.footer-heading',
  // elementHome
  menuOtomotif: 'li ul li:nth-child(2) .heading.footer-heading',
  menuPurnaJual: 'li ul li:nth-child(3) .heading.footer-heading',
  menuQuickLinks: 'li ul li:nth-child(4) .heading.footer-heading',
  labelCopyright: '.__copyright .text-center',
  menuCaraKerja: ".yCmsComponent a[href='/in/ways-of-working']",
  tentangAstraDaihatsu: '.sub-heading a[href="/in/about-astradaihatsu"]',
  // Produk
  Sigra: '.sub-heading [title="Astra Daihatsu Sigra"]',
  Xenia: '.sub-heading [title="Xenia"]',
  Sirion: '.sub-heading [title="Sirion"]',
  Ayla: '.sub-heading [title="Astra Daihatsu Ayla"]',
  Luxio: '.sub-heading [title="Luxio"]',
  Terios: '.sub-heading [title="Terios"]',
  GrandMaxPickUp: '.sub-heading .yCmsComponent a[href="/in/c/TYPE?q=%3Arelevance%3Amodel%3AGranmax%2BPickup"]',
  GranMaxMB: '.sub-heading .yCmsComponent a[href="/in/c/TYPE?q=%3Arelevance%3Amodel%3AGranmax%2BMinibus"]',
  GranMaxBV: '.sub-heading .yCmsComponent a[href="/in/oto/mobil/baru/tipe/c/TYPE?q=%3Arelevance%3Amodel%3AGranmax%2BBlindvan"]',
  // PurnaJual
  hubungiKami: '.sub-heading a[href="/in/dsoservice/contact-us"]',
  lokasiOutlet: '.sub-heading a[href="/in/store-finder?carType=NewCar"]',
  Event: '.sub-heading a[href="/in/newsandarticles/listing"][title="Event"]',
  Berita: '.sub-heading a[href="/in/newsandarticles/listing"][title="Berita"]',
  Video: '.sub-heading a[href="/in/newsandarticles/listing"][title="Video"]',
  panduanPembelian: '.sub-heading a[href="/in/howtobuy"]',
  kebijakanPrivasi: ".yCmsComponent a[href='/in/privacy-statement']",
  syaratdanKetentuanPenggunaan: ".yCmsComponent a[href='/in/terms-condition']",
  promo: ".sub-heading .yCmsComponent a[href='/in/promotion-list']",
  mobilBaru: ".yCmsComponent a[href='/in/Auto/Cars/New-Cars/TYPE/c/TYPE']",
  berita: ".sub-heading .yCmsComponent a[href='/in/newsandarticles/listing']:nth-child(1)",
  daftarHarga: ".yCmsComponent a[href='/in/daftar-harga']",
  menuPromo: '.yCmsComponent a[href="/in/promotion-list"]',
  menuMobilBaru: '.yCmsComponent a[href="/in/Auto/Cars/New-Cars/TYPE/c/TYPE"]',
  menuBerita: '.yCmsComponent a[href="/in/newsandarticles/listing"]',
  menuDaftarHarga: '.yCmsComponent a[href="/in/daftar-harga"]',
  testDrive: 'li.yCmsComponent a[href="/in/dsoservice/test-drive"]',
  bookService: 'li.yCmsComponent a[href="/in/dsoservice/book-service"]',
  kalkulator: '.yCmsComponent a[href="/in/dsoservice/credit-calculator?carType=NewCar"]',
  perawatanBerkala: ".sub-heading .yCmsComponent a[href='/in/perawatan-berkala']",
  bodiDanCat: ".sub-heading .yCmsComponent a[href='/in/bodi-dan-cat']",
  era24Jam: ".sub-heading .yCmsComponent a[href='/in/era-24']",
  sukuCadang: ".yCmsComponent a[title='Suku Cadang']",
  mobileService: ".sub-heading .yCmsComponent a[href='/in/mobile-service']",
  ServiceSuperCepat: ".sub-heading .yCmsComponent a[href='/in/service-super-cepat']",
  part24Jam: ".sub-heading .yCmsComponent a[href='/in/part-24']",
  happyKontrakService: ".sub-heading .yCmsComponent a[href='/in/happy-kontrak-service']",
  titleCaraKerja: '.info-text',
  titleTentangAstraDaihatsu: '.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  titlePanduanPembelian: '.yCmsContentSlot.banner-logo-info.BrandPageLogoComponent',
  titleSyaratdanKetentuanPenggunaan: '.info-text',
  titleBerita: '.articles_head',
  titleDaftarHarga: '.header-component',
  titlePerawatanBerkala: '.info-text',
  titleBodiDanCat: '.info-text',
  titleERA24Jam: '.info-text',
  titleSukuCadang: '.info-text',
  titleMobileService: '.info-text',
  titleServiceSuperCepat: '.info-text',
  titlePart24Jam: '.info-text',
  titleHappyKontrakService: '.info-text',
  SimulasiKredit: '.yCmsComponent a[href="/in/dsoservice/credit-calculator?carType=NewCar"]',
  EmailDaihatsu: '.label:nth-child(2)',
  IconEmail: '.yCmsComponent .content [src="/_ui/responsive/theme-astradaihatsu/images/email.png"]',
  IconNo: '.yCmsComponent .content [src="/_ui/responsive/theme-astradaihatsu/images/phone.png"]',
  IconUnduh: '.yCmsComponent .content [src="/_ui/responsive/theme-astradaihatsu/images/daihatsu-logo.png"]',
  IconAppStore: '.yCmsComponent .content [src="/_ui/responsive/theme-astradaihatsu/images/app-store-badge.png"]',
  IconPlayStore: '.yCmsComponent .content [src="/_ui/responsive/theme-astradaihatsu/images/google-play-badge.png"]',
  BookingServiceHeader: '.yCmsContentSlot a[href="/in/dsoservice/book-service"]',
  BookingServiceFooter: '.yCmsComponent .sub-heading a[href="/in/dsoservice/book-service"]',
  HubungKamiFooter: '.yCmsComponent .sub-heading a[href="/in/dsoservice/contact-us"]',
  LokasiOutletFooter: '.yCmsComponent .sub-heading a[href="/in/store-finder?carType=NewCar"]',
  BeritaFooter: '.yCmsComponent .sub-heading a[href="/in/newsandarticles/listing"]',
  containerSEO: '.container #SEO_text_container',
  TextCopyright: '.text-copyright',
  icontTwitter: ' a[href="https://twitter.com/AstraDaihatsuID"]',
  icontFacebook: ' a[href="https://fb.me/DaihatsuAstraID"]',
  iconPromo: '.yCmsContentSlot  a[href="/in/promotion-list"]',
  // ProductList
  SirionList: '#product-1.product-model .masking  .newCarPrimaryImg',
  TeriosList: '#product-2.product-model .masking  .newCarPrimaryImg',
  XeniaList: '#product-3.product-model .masking  .newCarPrimaryImg',
  GMBV: '#product-4.product-model .masking  .newCarPrimaryImg',
  GMPU: '#product-5.product-model .masking  .newCarPrimaryImg',
  GMMB: '#product-6.product-model .masking  .newCarPrimaryImg',
  LuxioList: '#product-7.product-model .masking  .newCarPrimaryImg',
  AylaList: '#product-8.product-model .masking  .newCarPrimaryImg',
  SigraList: '#product-9.product-model .masking  .newCarPrimaryImg',
  LihatSemuaList: '#product-10.product-model .masking  .newCarPrimaryImg',
  // Test Drive
  iconTestDrive: '.yCmsContentSlot a[href="/in/dsoservice/test-drive"]',
  // staticImage
  staticImage: '.cmsimage .loading',
  // News On Homepage
  newsOnHomepage: '#tile-1',
  tabelBerita: '.col-lg-7',
  // Outlet
  OutletHeader: '.yCmsComponent a[href="/in/store-finder?carType=NEWCAR"]',
};

export const verifyMainBanner = async () => {
  await base.clickElement(element.slickslide1);
  await base.expectVisible(element.mainbanner1);
  await client.pause(1000);
  await base.clickElement(element.slickslide2);
  await base.expectVisible(element.mainbanner2);
  await base.clickElement(element.slickslide3);
  await base.expectVisible(element.mainbanner3);
  await base.clickElement(element.slickslide4);
  await base.expectVisible(element.mainbanner4);
  await base.clickElement(element.slickslide5);
  await base.expectVisible(element.mainbanner5);
  await base.clickElement(element.slicknext);
  await base.clickElement(element.slickprev);
};

export const verifyPromoBanner = async () => {
  await base.assertContainsText(element.promoOffer, 'Special Offer');
  await base.expectVisible(element.linkPromoPage);
  await base.expectVisible(element.promo1);
  await base.expectVisible(element.promo2);
  await base.clickElement(element.linkPromoPage);
  client.pause(1000);
};

export const verifyCaraPesan = async () => {
  await base.assertContainsText(element.caraPesan, 'Cara Pesan Mobil Sesuai yang Kamu Inginkan');
  await base.assertContainsText(element.cara1, '1');
  await base.expectVisible(element.picCara1);
  await base.assertContainsText(element.wordCara1, 'Cari, bandingkan dan pilih mobil yang kamu inginkan.');
  await base.assertContainsText(element.cara2, '2');
  await base.expectVisible(element.picCara2);
  await base.assertContainsText(element.wordCara2, 'Gunakan fitur Simulasi Kredit untuk menghitung estimasi cicilan.');
  await base.assertContainsText(element.cara3, '3');
  await base.expectVisible(element.picCara3);
  await base.assertContainsText(element.wordCara3, 'Lakukan pemesanan mobil jika kamu sudah menemukan mobil yang cocok denganmu.');
  await base.assertContainsText(element.cara4, '4');
  await base.expectVisible(element.picCara4);
  await base.assertContainsText(element.wordCara4, 'Permintaan kamu akan segera di proses dan tim kami akan menghubungi kamu via telepon');
  client.pause(1000);
};

export const verifyPurnajual = async () => {
  await base.assertContainsText(element.purnajualHead, 'Layanan Purnajual');
  await base.assertContainsText(element.purnajualWord, 'Nikmati berbagai layanan purnajual yang memudahkan Anda melakukan perawatan mobil Daihatsu. Layanan purnajual Astra Daihatsu didukung oleh teknisi - teknisi yang handal dan terampil, dengan harga terjangkau. Bengkel Astra Daihatsu tersebar di berbagai kota dan kabupaten di Indonesia.');
  await base.expectVisible(element.PJ1);
  await base.assertContainsText(element.PJ1, 'Perawatan Berkala');
  await base.expectVisible(element.PJ2);
  await base.assertContainsText(element.PJ2, 'Bodi dan Cat');
  await base.expectVisible(element.PJ3);
  await base.assertContainsText(element.PJ3, 'Emergency Road Assistance 24 Jam');
  await base.expectVisible(element.PJ4);
  await base.assertContainsText(element.PJ4, 'Suku Cadang');
  await base.expectVisible(element.PJ5);
  await base.assertContainsText(element.PJ5, 'Promo');
  await base.expectVisible(element.PJ6);
  await base.assertContainsText(element.PJ6, 'Mobile Service');
  await base.expectVisible(element.PJ7);
  await base.assertContainsText(element.PJ7, 'Service Super Cepat');
  await base.expectVisible(element.PJ8);
  await base.assertContainsText(element.PJ8, 'Part 24 Jam atau Gratis');
  await base.expectVisible(element.PJ9);
  await base.assertContainsText(element.PJ9, 'Booking Service');
  await base.expectVisible(element.PJ10);
  await base.assertContainsText(element.PJ10, 'Happy Kontrak Service');
  client.pause(1000);
};

export const verifyPJ1 = async () => {
  await base.clickElement(element.PJ1);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/perawatan-berkala');
};

export const verifyPJ2 = async () => {
  await base.clickElement(element.PJ2);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/bodi-dan-cat');
};

export const verifyPJ3 = async () => {
  await base.clickElement(element.PJ3);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/era-24');
};

export const verifyPJ4 = async () => {
  await base.clickElement(element.PJ4);
};

export const verifyPJ5 = async () => {
  await base.clickElement(element.PJ5);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/promotion-list');
};

export const verifyPJ6 = async () => {
  await base.scrollToElement(element.PJ6);
  await base.clickElement(element.PJ6);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/mobile-service');
};

export const verifyPJ7 = async () => {
  await base.clickElement(element.PJ7);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/service-super-cepat');
};

export const verifyPJ8 = async () => {
  await base.clickElement(element.PJ8);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/part-24');
};

export const verifyPJ9 = async () => {
  await base.clickElement(element.PJ9);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/book-service');
};

export const verifyPJ10 = async () => {
  await base.clickElement(element.PJ10);
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/happy-kontrak-service');
};

// Vehicle Type

export const vehicleTypeIcon = async () => {
  await base.scrollDown('body');
  await base.expectVisible(element.iconSUV);
  await base.expectVisible(element.iconMPV);
  await base.expectVisible(element.iconKN);
  await base.expectVisible(element.iconCC);
  await base.expectVisible(element.iconSemua);
};

export const clickSUV = async () => {
  await base.clickElement(element.iconSUV);
};

export const verifySUV = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/SUV/c/SUV');
};

export const clickMPV = async () => {
  await base.clickElement(element.iconMPV);
};

export const verifyMPV = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/MPV/c/MPV');
};

export const clickKendaraanNiaga = async () => {
  await base.clickElement(element.iconKN);
};

export const verifyKendaraanNiaga = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/Kendaraan-Niaga/c/KENDARAANNIAGA');
};

export const clickCityCar = async () => {
  await base.clickElement(element.iconCC);
};

export const verifyCityCar = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/City-Car/c/CITYCAR');
};

export const clickAllType = async () => {
  await base.clickElement(element.iconSemua);
};

export const verifyAllType = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/oto/mobil/baru/tipe/c/TYPE');
};

// Footer

export const ExpectFooterIcon = async () => {
  await base.scrollToElement(element.happyKontrakService);
  await base.expectVisible(element.menuAstraDaihatsu);
  await base.expectVisible(element.tentangAstraDaihatsu);
  await base.expectVisible(element.hubungiKami);
  await base.expectVisible(element.lokasiOutlet);
  await base.expectVisible(element.berita);
  await base.expectVisible(element.Sigra);
  await base.expectVisible(element.Xenia);
  await base.expectVisible(element.Sirion);
  await base.expectVisible(element.Ayla);
  await base.expectVisible(element.Luxio);
  await base.expectVisible(element.Terios);
  await base.expectVisible(element.GrandMaxPickUp);
  await base.expectVisible(element.GranMaxMB);
  await base.expectVisible(element.GranMaxBV);
  await base.expectVisible(element.perawatanBerkala);
  await base.expectVisible(element.bodiDanCat);
  await base.expectVisible(element.era24Jam);
  await base.expectVisible(element.sukuCadang);
  await base.expectVisible(element.mobileService);
  await base.expectVisible(element.ServiceSuperCepat);
  await base.expectVisible(element.part24Jam);
  await base.expectVisible(element.happyKontrakService);
  await base.expectVisible(element.bookService);
  await base.expectVisible(element.IconEmail);
  await base.expectVisible(element.IconNo);
  await base.expectVisible(element.IconUnduh);
  await base.expectVisible(element.IconAppStore);
  await base.expectVisible(element.IconPlayStore);
};

export const ExpectFooterPages = async () => {
  await base.clickElement(element.tentangAstraDaihatsu);
  await base.assertUrlEquals('');
};

export const verifyIconProduk = async () => {
  await base.expectVisible(element.Produk);
};

export const verifyIconPurnaJual = async () => {
  await base.expectVisible(element.PurnaJual);
};

export const verifyIconBeliDaihatsu = async () => {
  await base.expectVisible(element.BeliDaihatsu);
};

export const verifyAyla = async () => {
  await base.scrollToElement(element.IconPlayStore);
  await base.clickElement(element.Ayla);
};

export const verifySigra = async () => {
  await base.scrollToElement(element.Terios);
  await base.clickElement(element.Sigra);
};

export const verifyBlindVan = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.GranMaxBV);
};

export const verifyMiniBus = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.GranMaxMB);
};

export const verifyPickUp = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.GrandMaxPickUp);
};

export const verifyLuxio = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.Luxio);
};

export const verifySirion = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.Sirion);
};

export const verifyTerios = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.Terios);
};

export const verifyXenia = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.Xenia);
};

export const verifyPerawatanBerkala = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.perawatanBerkala);
};

export const verifyBodiDanCat = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.bodiDanCat);
};

export const verifyERA24Jam = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.era24Jam);
};

export const verifySukuCadang = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.sukuCadang);
};

export const verifyMobileService = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.mobileService);
};

export const verifyServiceSuperCepat = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.ServiceSuperCepat);
};

export const verifyPart24Jam = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.part24Jam);
};

export const verifyHappyKontrakService = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.happyKontrakService);
};

export const verifyBookingService = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.bookService);
};

export const verifyDaftarHarga = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.daftarHarga);
};

export const verifySimulasiKredit = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.SimulasiKredit);
};

export const verifyPromo = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.promo);
};

export const clickBookingService = async () => {
  await base.clickElement(element.BookingServiceHeader);
};

export const clickTentangKamiFooter = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.tentangAstraDaihatsu);
};

export const clickLokasiOutlet = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.LokasiOutletFooter);
};
export const clickBerita = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.BeritaFooter);
};

export const clickHubungiKami = async () => {
  await base.scrollToElement(element.Xenia);
  await base.clickElement(element.HubungKamiFooter);
};

export const expectSEO = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/');
  // SEO 1
  await base.assertContainsText(element.containerSEO, 'Kunjungi Outlet Daihatsu Terdekat di Kota Anda');
  await base.assertContainsText(element.containerSEO, 'penawaran menarik lainnya melalui website, Sahabat juga bisa langsung mengunjungi');
  await base.assertContainsText(element.containerSEO, 'salah satu dari 244 Outlet Daihatsu yang tersebar di 33 Provinsi di seluruh Indonesia,');
  await base.assertContainsText(element.containerSEO, 'dengan 153 outlet diantaranya selain memberikan layanan penjualan juga memberikan');
  await base.assertContainsText(element.containerSEO, 'layanan purna jual. Dengan jaringan outlet yang luas, Daihatsu memberikan kemudahan');
  await base.assertContainsText(element.containerSEO, 'untuk Sahabat Daihatsu dalam membeli kendaraan baru maupun perawatan purna jual.');
  await base.assertContainsText(element.containerSEO, 'Selain jaringan yang luas, seluruh outlet Daihatsu memiliki layanan One Stop Service yang');
  await base.assertContainsText(element.containerSEO, 'memudahkan Sahabat ketika membutuhkan pembiayaan, asuransi dan tukar tambah');
  await base.assertContainsText(element.containerSEO, 'kendaraan. Daihatsu terus berkomitmen untuk selalu memberikan pelayanan dan');
  await base.assertContainsText(element.containerSEO, 'pengalaman terbaik kepada seluruh Sahabat');
  await base.assertContainsText(element.containerSEO, 'Segera kunjungi outlet Daihatsu terdekat di kota Anda. Untuk informasi pembelian mobil Daihatsu, pilih menu MINTA PENAWARAN');
  await base.assertContainsText(element.containerSEO, 'TERBAIK atau hubungi kami melalui Daihatsu Access di nomor telepon 1500898.');
  // SEO 2
  await base.assertContainsText(element.containerSEO, 'Layanan Purnajual Kendaran Daihatsu');
  await base.assertContainsText(element.containerSEO, 'Kunjungi bengkel resmi Daihatsu terdekat di Kota Anda, untuk mendapatkan perawatan dan');
  await base.assertContainsText(element.containerSEO, 'perbaikan kendaraan, suku cadang , serta layanan purna jual kendaraan Daihatsu yang terpercaya.');
  await base.assertContainsText(element.containerSEO, 'Seluruh bengkel Daihatsu memiliki peralatan yang lengkap dan didukung oleh mekanik');
  await base.assertContainsText(element.containerSEO, 'berpengalaman, terlatih dan bersertifikat. Dapatkan berbagai kemudahan layanan purna');
  await base.assertContainsText(element.containerSEO, 'jual lain, seperti Service Super Cepat (59 menit), Parts Super Cepat 24 jam, Mobile Service, dan Happy Kontrak Service.');
  await base.assertContainsText(element.containerSEO, 'Booking service dengan mudah melalui website ini dengan memilih menu BOOKING SERVICE,');
  await base.assertContainsText(element.containerSEO, 'melalui menu OUTLET, atau hubungi kami melalui Daihatsu Access di nomor telepon 1500898.');
};
//  Footer 3

export const expectCopyright = async () => {
  await base.scrollToElement(element.Xenia);
  await base.assertContainsText(element.TextCopyright, 'Copyright ©2020 Astra International - Daihatsu. All rights reserved.');
};

export const Twitter = async () => {
  await base.expectVisible(element.icontTwitter);
};
export const Facebook = async () => {
  await base.expectVisible(element.icontFacebook);
};

export const Promo = async () => {
  await base.expectVisible(element.iconPromo);
};

export const Promo2 = async () => {
  await base.clickElement(element.iconPromo);
};

export const SirionList = async () => {
  await base.scrollToElement(element.SirionList);
  await base.clickElement(element.SirionList);
};

export const TeriosList = async () => {
  await base.scrollToElement(element.SirionList);
  await base.clickElement(element.TeriosList);
};

export const XeniaList = async () => {
  await base.scrollToElement(element.SirionList);
  await base.clickElement(element.XeniaList);
};

export const BVList = async () => {
  await base.scrollToElement(element.GMBV);
  await base.clickElement(element.GMBV);
};

export const PUList = async () => {
  await base.scrollToElement(element.GMPU);
  await base.clickElement(element.GMPU);
};

export const MBList = async () => {
  await base.scrollToElement(element.GMMB);
  await base.clickElement(element.GMMB);
};

export const LuxioList = async () => {
  await base.scrollToElement(element.LuxioList);
  await base.clickElement(element.LuxioList);
};

export const SigraList = async () => {
  await base.scrollToElement(element.SigraList);
  await base.clickElement(element.SigraList);
};

export const AylaList = async () => {
  await base.scrollToElement(element.AylaList);
  await base.clickElement(element.AylaList);
};

export const LihatSemuaList = async () => {
  await base.scrollToElement(element.SigraList);
  await base.clickElement(element.LihatSemuaList);
};

export const verifyStaticImage = async () => {
  await base.scrollToElement(element.menuAstraDaihatsu);
  await base.expectVisible(element.staticImage);
};

export const verifyPDP = async () => {
  await base.scrollToElement(element.SirionList);
  await base.clickElement(element.SirionList);
};

export const verifyNewsOnHomePage = async () => {
  await base.scrollToElement(element.newsOnHomepage);
  await base.expectVisible(element.newsOnHomepage);
};

export const clickOutlet = async () => {
  await base.clickElement(element.OutletHeader);
};
