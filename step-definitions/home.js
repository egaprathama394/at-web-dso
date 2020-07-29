import * as home from '../pages/home';
import * as head from '../pages/header';
import * as promo from '../pages/Promo';

const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

Given(/^a guest is at DSO Home page$/, async () => {
  await client.url('https://qa.astra-daihatsu.id/');
  await client.pause(3000);
});

// Home 1

// Then(/^a guest can see all contents on Home page$/, async () => {
//   // await home.clickIconUser();
//   // await home.clickMenuLogin();
// });

Then(/^a guest can see Main Banner on Home page$/, async () => {
  await home.verifyMainBanner();
});

Then(/^a guest can see Promo Banner on Home page$/, async () => {
  await home.verifyPromoBanner();
  await promo.verifyPromo();
});

// Home 2 & Home 3
Then(/^a guest can see Vehicle Type on Home page$/, async () => {
  await home.vehicleTypeIcon();
});

When(/^a guest click SUV icon$/, async () => {
  await home.clickSUV();
});

Then(/^a guest can see SUV PLP page$/, async () => {
  await home.verifySUV();
});

When(/^a guest click MPV icon$/, async () => {
  await home.clickMPV();
});

Then(/^a guest can see MPV PLP page$/, async () => {
  await home.verifyMPV();
});

When(/^a guest click Kendaraan Niaga icon$/, async () => {
  await home.clickKendaraanNiaga();
});

Then(/^a guest can see Kendaraan Niaga PLP page$/, async () => {
  await home.verifyKendaraanNiaga();
});

When(/^a guest click City Car icon$/, async () => {
  await home.clickCityCar();
});

Then(/^a guest can see City Car PLP page$/, async () => {
  await home.verifyCityCar();
});

When(/^a guest click All icon$/, async () => {
  await home.clickAllType();
});

Then(/^a guest can see All PLP page$/, async () => {
  await home.verifyAllType();
});

Then(/^a guest can see All icon footer on Home page$/, async () => {
  client.pause(4000);
  await home.ExpectFooterIcon();
});

// Then(/a guest can see All pages in all icon footer on Home page$/, async () => {
//   await home.ExpectTentangKami();
//   await home.ExpectHubungiKami();
//   await home.ExpectLokasiOutlet();
//   await home.ExpectBerita();
//   await home.ExpectAyla();
//   await home.ExpectSigra();
//   await home.ExpectGranMaxBlindVan();
//   await home.ExpectGranMaxMiniBus();
//   await home.ExpectGranMaxPU();
//   await home.ExpectLuxio();
//   await home.ExpectSirion();
//   await home.ExpectTerios();
//   await home.ExpectXenia();
//   await home.ExpectPerawatanBerkala();
//   await home.ExpectBodyDanCat();
//   await home.ExpectSukuCadang();
//   await home.ExpectERA24Jam();
//   await home.ExpectServiceSuperCepat();
//   await home.ExpectMobileService();
//   await home.ExpectPart24Jam();
//   await home.ExpectHappyKontrakService();
//   await home.ExpectPart24Jam();
//   await home.ExpectBookingService();
// });

Then(/a guest can see Icon Produk in footer$/, async () => {
  await home.verifyIconProduk();
});

Then(/a guest can see Icon Purna Jual in footer$/, async () => {
  await home.verifyIconPurnaJual();
});

Then(/a guest can see Icon Beli Daihatsu in footer$/, async () => {
  await home.verifyIconBeliDaihatsu();
});

When(/a guest click Ayla on footer$/, async () => {
  await home.verifyAyla();
});

When(/a guest click Sigra on footer$/, async () => {
  await home.verifySigra();
});

When(/a guest click Blind Van on footer$/, async () => {
  await home.verifyBlindVan();
});

When(/a guest click Mini Bus on footer$/, async () => {
  await home.verifyMiniBus();
});

When(/a guest click Pick Up on footer$/, async () => {
  await home.verifyPickUp();
});

When(/a guest click Luxio on footer$/, async () => {
  await home.verifyLuxio();
});

When(/a guest click Sirion on footer$/, async () => {
  await home.verifySirion();
});

When(/a guest click Terios on footer$/, async () => {
  await home.verifyTerios();
});

When(/a guest click Xenia on footer$/, async () => {
  await home.verifyXenia();
});

When(/a guest click Perawatan Berkala on footer$/, async () => {
  await home.verifyPerawatanBerkala();
});

When(/a guest click Bodi Dan Cat on footer$/, async () => {
  await home.verifyBodiDanCat();
});

When(/a guest click ERA 24 Jam on footer$/, async () => {
  await home.verifyERA24Jam();
});

When(/a guest click Suku Cadang on footer$/, async () => {
  await home.verifySukuCadang();
  await client.url('http://daihatsu-sparepart.com/');
});

When(/a guest click Mobile Service on footer$/, async () => {
  await home.verifyMobileService();
});

When(/a guest click Service Super Cepat on footer$/, async () => {
  await home.verifyServiceSuperCepat();
});

When(/a guest click Part 24 Jam on footer$/, async () => {
  await home.verifyPart24Jam();
});

When(/a guest click Happy Kontrak Service on footer$/, async () => {
  await home.verifyHappyKontrakService();
});

When(/a guest click Booking Service on footer$/, async () => {
  await home.verifyBookingService();
});

When(/a guest click Daftar Harga on footer$/, async () => {
  await home.verifyDaftarHarga();
});

When(/a guest click Simulasi Kredit on footer$/, async () => {
  await home.verifySimulasiKredit();
});

When(/a guest click Promo on footer$/, async () => {
  await home.verifyPromo();
});

When(/a guest click icon Booking service$/, async () => {
  await home.clickBookingServiceFooter();
});

When(/a gust click Tentang Kami on footer$/, async () => {
  await home.clickTentangKamiFooter();
});

When(/a guest click Hubungi Kami on footer$/, async () => {
  await home.clickHubungiKami();
});

When(/a gust click Lokasi Outlet on footer$/, async () => {
  await home.clickLokasiOutlet();
});

When(/a gust click Berita on footer$/, async () => {
  await home.clickBerita();
});

Then(/a guest can see SEO footer on Home page$/, async () => {
  await home.expectSEO();
});

Then(/a guest can see Copyright on Home page$/, async () => {
  await home.expectCopyright();
});

When(/^a guest can see twitter Page$/, async () => {
  await home.Twitter();
});

When(/^a guest can see Facebook Page$/, async () => {
  await home.Facebook();
});

Then(/^a guest can see icon promo on Home page$/, async () => {
  await home.Promo();
});

When(/a guest click Promo$/, async () => {
  await home.Promo2();
});

// Home 4

Then(/^a guest can see Static Cara Pesan on Home page$/, async () => {
  await home.verifyCaraPesan();
});

Then(/^a customer can see Static Purnajual 1 on Home page$/, async () => {
  await home.verifyPurnajual();
  await home.verifyPJ1();
  await head.backtohome();
  await home.verifyPJ2();
  await head.backtohome();
  await home.verifyPJ3();
  await head.backtohome();
  await home.verifyPJ4();
  await client.url('http://daihatsu-sparepart.com/');
  await client.pause(1000);
  await client.url('https://qa.astra-daihatsu.id/in/');
  await home.verifyPJ5();
  await client.pause(1000);
  await head.backtohome();
});

Then(/^a customer can see Static Purnajual 2 on Home page$/, async () => {
  await home.verifyPurnajual();
  await home.verifyPJ6();
  await client.pause(1000);
  await head.backtohome();
  await home.verifyPJ7();
  await client.pause(1000);
  await head.backtohome();
  await home.verifyPJ8();
  await client.pause(1000);
  await head.backtohome();
  await home.verifyPJ9();
  await head.backtohome();
  await home.verifyPJ10();
});

// Home 5

When(/^a guest click Sirion on Home page$/, async () => {
  await home.SirionList();
});

When(/^a guest click Terios on Home page$/, async () => {
  await home.TeriosList();
});

When(/^a guest click Xenia on Home page$/, async () => {
  await home.XeniaList();
});

When(/^a guest click GranMaxBV on Home page$/, async () => {
  await home.BVList();
});

When(/^a guest click GranMaxPU on Home page$/, async () => {
  await home.PUList();
});

When(/^a guest click GranMaxMB on Home page$/, async () => {
  await home.MBList();
});


When(/^a guest click Luxio on Home page$/, async () => {
  await home.LuxioList();
});

When(/^a guest click Ayla on Home page$/, async () => {
  await home.AylaList();
});

When(/^a guest click Sigra on Home page$/, async () => {
  await home.SigraList();
});

When(/^a guest click Lihat Semua on Home page$/, async () => {
  await home.LihatSemuaList();
});

When(/^a guest click Sirion on Produclist$/, async () => {
  await home.verifyPDP();
});

Then(/^a guest can see Static Image on Home page$/, async () => {
  await home.verifyStaticImage();
});

Then(/^a guest can see News on Home page$/, async () => {
  await home.verifyNewsOnHomePage();
});

Then(/^a guest try to click Outlet Page$/, async () => {
  await home.clickOutlet();
});
