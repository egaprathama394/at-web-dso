import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  logo1: '.__second-logo',
  logo2: '.__third-logo',
  logoAstra: '.header-lv1 .banner__component',
  tentangAstra: '.yCmsComponent.__about-us',
  panduanBeli: '.yCmsComponent.__buying-guide',
  hubungiKami: '.yCmsComponent.__contact-us',

  search: '#js-site-search-input',
  menuPromo: '.menu-top-header a[href="/in/promotion-list"]',
  menuBerita: '.menu-top-header a[href="/in/newsandarticles/listing"]',
  menuTestDrive: '.menu-top-header a[href="/in/dsoservice/test-drive"]',
  menuBookServ: '.menu-top-header a[href="/in/dsoservice/book-service"]',
  menuSukuCadang: '',
  menuOutlet: '.menu-top-header a[href="/in/store-finder?carType=NEWCAR"]',
  menuLogin: '.__action .login',
  iconProfil: '.__action.notification-bar  .icons_user',
  menuDaftar: '.__action .register',
  myProfil: '.__action .liOffcanvas',
  menuLogout: '.account_sign_out',

  menuNotif: '.__action .icon-Bell',
  allNotif: '#menu-top-header > ul.__action.notification-bar > li.user_account_item.notifications_item.notifications_item_nav.notifications_icon.notified > ul > a > span',
  notif1: '.__action .notifications_menu .unread:nth-child(3)',
  notif2: '.__action .notifications_menu .unread:nth-child(4)',
  notif3: '.__action .notifications_menu .unread:nth-child(5)',
  menuRiwayatHub: '.__action .icon-chat',
  menuKeranjang: '.__action .icon-cart-car',
  menuProfil: '.__action .icons_user',

  terios1: '.row .col-lg-12:nth-child(2)',
  terios2: '.row .col-lg-12:nth-child(4)',
  terios3: '.row .col-lg-12:nth-child(6)',
  pilihModel: '.navbar-header .__desktop-nav',
  hotline: '.daihatsu-hotline a[href="tel:1500898"]',

  menuMPV: '.MPVLink',
  MPV1: 'a[href="/in/p/GMRV-BMREJJ-HEFH_D0811"]',
  MPV2: 'a[href="/in/p/B400RS-GMLEJ-26_D0306"]',
  MPV3: 'a[href="/in/p/LX1.5DM_TMC_D0102"]',
  MPV4: 'a[href="/in/p/GMRV-ZMDEJJ-HJFH_BL"]',
  MPV5: 'a[href="/in/p/F653RV-GMRFJ-W7_D0340"]',

  menuSUV: '.SUVLink',
  SUV1: 'a[href="/in/p/F800RG-GMDFJ-HY_BRM"]',

  menuCityCar: '.CityCarLink',
  CityCar1: 'a[href="/in/p/M804RS-GMNEMJ-KQ_DGS"]',
  CityCar2: 'a[href="/in/p/AYLA-GMLFJ-EH_D0199eo"]',

  menuNiaga: '.KendaraanNiagaLink',
  Niaga1: 'a[href="/in/p/GMRP-TMREJJ-HCFH_D0811"]',
};

export const backtohome = async () => {
  await base.clickElement(element.logoAstra);
};

// Header 1

export const verifyHeader1 = async () => {
  await base.expectVisible(element.logo1);
  await base.expectVisible(element.logo2);
  await base.expectVisible(element.tentangAstra);
  await base.expectVisible(element.panduanBeli);
  await base.expectVisible(element.hubungiKami);
};

// Header 2 A

export const verifyHeader2guest = async () => {
  await base.expectVisible(element.logoAstra);
  await base.expectVisible(element.search);
  await base.expectVisible(element.menuPromo);
  await base.expectVisible(element.menuBerita);
  await base.expectVisible(element.menuTestDrive);
  await base.expectVisible(element.menuBookServ);
  await base.expectVisible(element.menuOutlet);
  await base.expectVisible(element.menuLogin);
  await base.expectVisible(element.menuDaftar);
};

export const verifyHeader2cust = async () => {
  await base.expectVisible(element.logoAstra);
  await base.expectVisible(element.search);
  await base.expectVisible(element.menuPromo);
  await base.expectVisible(element.menuBerita);
  await base.expectVisible(element.menuTestDrive);
  await base.expectVisible(element.menuBookServ);
  await base.expectVisible(element.menuOutlet);
  await base.expectVisible(element.menuNotif);
  await base.expectVisible(element.menuRiwayatHub);
  await base.expectVisible(element.menuKeranjang);
  await base.expectVisible(element.menuProfil);
};

export const search = async (cari) => {
  await base.clickElement(element.search);
  await base.setValueElement(element.search, cari);
};

export const suggest = async () => {
  await base.expectVisible(element.terios1);
  await base.expectVisible(element.terios2);
  await base.expectVisible(element.terios3);
};

export const clickProfil = async () => {
  await base.clickElement(element.myProfil);
};

export const clickMenuLogin = async () => {
  await base.clickElement(element.menuLogin);
  await client.pause(1000);
};

export const clickMenuLogout = async () => {
  await base.scrollToElement(element.iconProfil);
  await base.clickElement(element.menuLogout);
  // await base.clickElementViaInject(element.menuLogout);
};

export const clickMenuDaftar = async () => {
  await base.clickElement(element.menuDaftar);
  await client.pause(1000);
};

// Header 2 B

export const clickPromo = async () => {
  await base.clickElement(element.menuPromo);
};

export const clickBerita = async () => {
  await base.clickElement(element.menuBerita);
};

export const clickTestDrive = async () => {
  await base.clickElement(element.menuTestDrive);
};

// Header 2 C

export const clickBookService = async () => {
  await base.clickElement(element.menuBookServ);
};

export const clickSukuCadang = async () => {
  await base.clickElement(element.menuSukuCadang);
};

export const clickOutlet = async () => {
  await base.clickElement(element.menuOutlet);
};

// Header 2 D

export const verifyRegist = async () => {
  await client.assert.visible(element.txtUsername);
};

// Header 2 E

export const hoverNotif = async () => {
  await base.scrollToElement(element.menuNotif);
  await base.expectVisible(element.notif1);
  await base.expectVisible(element.notif2);
  await base.expectVisible(element.notif3);
};

export const clickNotif = async () => {
  await base.clickElement(element.allNotif);
};

export const clickRiwayatHub = async () => {
  await base.clickElement(element.menuRiwayatHub);
};

// Header 2 F

export const clickCart = async () => {
  await base.clickElement(element.menuKeranjang);
};

// Header 3 A

export const verifyHeader3 = async () => {
  await base.expectVisible(element.pilihModel);
  await base.expectVisible(element.hotline);
  await client.pause(3000);
};

export const clickPilihModel = async () => {
  await base.clickElement(element.pilihModel);
};

export const verifyMPV = async () => {
  await base.clickElement(element.menuMPV);
  await base.expectVisible(element.MPV1);
  await base.assertContainsText(element.MPV1, '');
  await base.expectVisible(element.MPV2);
  await base.assertContainsText(element.MPV2, '');
  await base.expectVisible(element.MPV3);
  await base.assertContainsText(element.MPV3, '');
  await base.expectVisible(element.MPV4);
  await base.assertContainsText(element.MPV4, '');
  await base.expectVisible(element.MPV5);
  await base.assertContainsText(element.MPV5, '');
};

export const verifySUV = async () => {
  await base.clickElement(element.menuSUV);
  await base.expectVisible(element.SUV1);
  await base.assertContainsText(element.SUV1, '');
};

export const verifyCityCar = async () => {
  await base.clickElement(element.menuCityCar);
  await base.expectVisible(element.CityCar1);
  await base.assertContainsText(element.CityCar1, '');
  await base.expectVisible(element.CityCar2);
  await base.assertContainsText(element.CityCar2, '');
};

export const verifyNiaga = async () => {
  await base.clickElement(element.menuNiaga);
  await base.expectVisible(element.Niaga1);
  await base.assertContainsText(element.Niaga1, '');
};
