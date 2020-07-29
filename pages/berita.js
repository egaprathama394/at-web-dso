import * as base from '../common/base-functions';

const { client } = require('nightwatch-api');

const element = {
  menuBerita: '.js_nav__link   a[href="/in/newsandarticles/listing"]',
  breadcrumb: '.breadcrumb',
  slick1: '#slick-slide-control00',
  slick2: '#slick-slide-control01',
  slick3: '#slick-slide-control02',
  slick4: '#slick-slide-control03',
  carousel1: '#slick-slide00',
  carousel2: '#slick-slide01',
  carousel3: '#slick-slide02',
  carousel4: '#slick-slide03',
  carouselPict2: '.subordinate_articles:nth-child(3) .iconplay',
  category: '.special-category:nth-child(1)',
  articleTitle: '.article_info a[href="/in/newsandarticles/news-details?newsID=27"]',
  articleDesc: ' .col-8 .article_info .article_desc:nth-child(3)',
  articleDate: '.article_info .row .col-10:nth-child(1)',
  bookmark: '.bookmark:nth-child(1)',
  breadcrumbTitle: '.active:nth-child(3)',
  articlePict: '.col-4 a[href="/in/newsandarticles/news-details?newsID=27"] .iconplay',
  backtolist: '#back_to_listing',
  bookArticle: '.icon-Bookmark-stroke',
  iconShare: '.hide-document.icon-Share',
  video: '.news_articles-details--image',
  listTitle: '.articles_list--title',
  staticContent1: '.col-md-4:nth-child(1)',
  staticContent2: '.col-md-4:nth-child(2)',
  staticContent3: '.col-md-4:nth-child(3)',
  btnBacaSemua: '.btn',
};

export const accessBerita = async () => {
  await base.clickElement(element.menuBerita);
  client.pause(1000);
};

export const urlBerita = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
};

export const verifyBerita = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
  await base.assertContainsText(element.breadcrumb, 'Home');
  await base.assertContainsText(element.breadcrumb, 'Berita & Artikel');
  await base.clickElement(element.slick1);
  await base.expectVisible(element.carousel1);
  client.pause(1000);
  await base.clickElement(element.slick2);
  await base.expectVisible(element.carousel2);
  client.pause(1000);
  await base.clickElement(element.slick3);
  await base.expectVisible(element.carousel3);
  client.pause(1000);
  await base.clickElement(element.slick4);
  await base.expectVisible(element.carousel4);
  client.pause(1000);
  await base.assertContainsText(element.category, 'VIDEO');
  await base.assertContainsText(element.articleTitle, 'Mengapa Toyta Car Is Right?');
  await base.assertContainsText(element.articleDesc, 'Daihatsu meluncurkan New Astra Daihatsu Sigra pada Selasa, 17 September 2019 bertempat di Paskal 23 Mall, Bandung. Dengan mengusung tagline Impian Keluarga Menjadi Nyata[...]');
  await base.assertContainsText(element.articleDate, '24 Sep 2019');
  await base.expectVisible(element.bookmark);
  await base.expectVisible(element.articlePict);
};

export const bookmark = async () => {
  await base.scrollToElement(element.bookmark);
  await base.clickElement(element.bookmark);
};

export const chooseArticle = async () => {
  await base.scrollToElement(element.bookmark);
  await base.expectVisible(element.carouselPict2);
  await base.clickElement(element.carouselPict2);
  client.pause(1000);
};

export const readArticle = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/news-details?newsID=28');
  await base.assertContainsText(element.breadcrumb, 'Home');
  await base.assertContainsText(element.breadcrumb, 'Berita & Artikel');
  await base.assertContainsText(element.breadcrumbTitle, 'Mengapa BMW Car in Indonesia Is Right?');
  await base.expectVisible(element.backtolist);
  await base.expectVisible(element.iconShare);
  await base.expectVisible(element.video);
  await base.scrollToElement(element.listTitle);
  await base.assertContainsText(element.listTitle, 'Berita & artikel yang bisa kamu baca selanjutnya');
};

export const verifyIconFooterBerita = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
  await base.assertContainsText(element.breadcrumb, 'Home');
  await base.assertContainsText(element.breadcrumb, 'Berita & Artikel');
  await base.clickElement(element.slick1);
  await base.expectVisible(element.carousel1);
  client.pause(1000);
  await base.clickElement(element.slick2);
  await base.expectVisible(element.carousel2);
  client.pause(1000);
  await base.clickElement(element.slick3);
  await base.expectVisible(element.carousel3);
  client.pause(1000);
  await base.clickElement(element.slick4);
  await base.expectVisible(element.carousel4);
  client.pause(1000);
  await base.assertContainsText(element.category, 'VIDEO');
  await base.assertContainsText(element.articleTitle, 'Mengapa Toyta Car Is Right?');
  await base.assertContainsText(element.articleDesc, 'Daihatsu meluncurkan New Astra Daihatsu Sigra pada Selasa, 17 September 2019 bertempat di Paskal 23 Mall, Bandung. Dengan mengusung tagline Impian Keluarga Menjadi Nyata[...]');
  await base.assertContainsText(element.articleDate, '24 Sep 2019');
  await base.expectVisible(element.bookmark);
  await base.expectVisible(element.articlePict);
};
