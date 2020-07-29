import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  tentangAstra: '.yCmsComponent.__about-us',
  panduanBeli: '.yCmsComponent.__buying-guide',
  hubungiKami: '.yCmsComponent.__contact-us',
  bannerTentang: '.info-text:nth-child(1)',
  content1: 'center:nth-child(3)',
  content2: 'center:nth-child(4)',
  content3: 'center:nth-child(7)',
  content4: 'center:nth-child(8)',
  content5: 'center:nth-child(9)',
  content6: 'center:nth-child(10)',
  content7: 'center:nth-child(12)',
  content8: 'center:nth-child(13)',
};

export const clickTentangAstra = async () => {
  await base.clickElement(element.tentangAstra);
};

export const verifyTentangAstra = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/about-astradaihatsu');
  await base.assertContainsText(element.bannerTentang, 'Tentang Astra Daihatsu');
  await base.assertContainsText(element.content1, 'Profil Perusahaan');
  await base.assertContainsText(element.content2, 'Distributor Tunggal dan Retailer kendaraan Daihatsu serta produk dan layanan pendukungnya di Indonesia');
  await base.assertContainsText(element.content3, 'Visi:');
  await base.assertContainsText(element.content4, 'Menjadi distributor dan reseller otomotif terbaik di Indonesia dalam hal Kepuasan Pelanggan');
  await base.assertContainsText(element.content5, 'didukung oleh pertumbuhan yang berkelanjutan. Struktur keuangan yang sehat dan sumber daya');
  await base.assertContainsText(element.content6, 'manusia yang sangat kompeten');
  await base.assertContainsText(element.content7, 'Misi:');
  await base.assertContainsText(element.content8, 'Memberikan nilai terbaik untuk produk dan layanan. Memiliki jaringan distribusi dan ritel yang kuat dan efisien');
  await base.assertContainsText(element.content8, 'melalui pengembangan fasilitas fisik yang baik dan stakeholder yang kompeten.');
  await base.assertContainsText(element.content8, 'Menciptakan nilai terbaik bagi para Shareholders');
};
