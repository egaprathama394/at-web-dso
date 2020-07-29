import { client } from 'nightwatch-api/lib';
import * as head from '../pages/header';
import * as about from '../pages/tentang-astra';
import * as panduan from '../pages/panduan-pembelian';
import * as hubungi from '../pages/hubungi-kami';

const { When, Then } = require('cucumber');

// Header 1 A

Then(/^a guest can see Header 1 contents on Home page$/, async () => {
  await head.verifyHeader1();
});

When(/^a guest try to access Tentang Astra Daihatsu Page through Header 1$/, async () => {
  await head.verifyHeader1();
  await about.clickTentangAstra();
});

// Header 1 B

When(/^a guest try to access Panduan Pembelian Page through Header 1$/, async () => {
  await head.verifyHeader1();
  await panduan.clickPanduan();
});

When(/^a guest try to access Hubungi Kami Page through Header 1$/, async () => {
  await head.verifyHeader1();
  await hubungi.clickHubungi();
});

// Header 2 A

Then(/^a guest can see Header 2 contents on Home page$/, async () => {
  await head.verifyHeader2guest();
});

Then(/^a customer can see Header 2 contents on Home page$/, async () => {
  await head.verifyHeader2cust();
});

When(/^a guest try to search '([^"]*)' through Header 2$/, async (cari) => {
  await head.search(cari);
  client.pause(1000);
});

Then(/^a guest can see car suggestions$/, async () => {
  await head.suggest();
});

When(/^a guest try to access Login page$/, async () => {
  await head.clickMenuLogin();
});

When(/^a customer try to access Akun Saya page/, async () => {
  await head.clickProfil();
});

Then(/^a customer cant see several content on Header 2$/, async () => {
  await head.verifyHeader2guest();
});

// Header 2 B

When(/^a guest try to access Promo Page through Header 2$/, async () => {
  await head.clickPromo();
});

When(/^a guest try to access Berita Page through Header 2$/, async () => {
  await head.clickBerita();
});

When(/^a guest try to access Test Drive Page through Header 2$/, async () => {
  await head.clickTestDrive();
});

// Header 2 C

When(/^a customer try to access Booking Service Page through Header 2$/, async () => {
  await head.clickBookService();
});

When(/^a guest try to access Suku Cadang Page through Header 2$/, async () => {
  await head.clickSukuCadang();
});

When(/^a guest try to access Outlet Page through Header 2$/, async () => {
  await head.clickOutlet();
});

// When a guest try to access Accessories Page through Header 2
// Then a guest can see Menu Accessories

// Header 2 D

When(/^a guest try to access Login Page through Header 2$/, async () => {
  await head.clickMenuLogin();
});

When(/^a guest try to access Registrasi Page through Header 2$/, async () => {
  await head.clickMenuDaftar();
});

// Header 2 E

When(/^a customer can see Notification drop down$/, async () => {
  await head.hoverNotif();
});

When(/^a customer try to access Notification Page through Header 2$/, async () => {
  await head.clickNotif();
});

When(/^a customer try to access Riwayat Hubungi Kami through Header 2$/, async () => {
  await head.clickRiwayatHub();
});

// Header 2 F

When(/^a customer try to see the cart$/, async () => {
  await head.clickCart();
});

// Header 3 A

Then(/^a guest can see Header 3 contents on Home page$/, async () => {
  await head.verifyHeader3();
});

When(/^a guest try to see model Daihatsu$/, async () => {
  await head.clickPilihModel();
});

Then(/^a guest can see model Daihatsu at Header 3$/, async () => {
  await head.verifyMPV();
  await head.verifySUV();
  await head.verifyCityCar();
  await head.verifyNiaga();
});
