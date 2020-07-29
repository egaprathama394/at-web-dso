import * as base from '../common/base-functions';

// const { client } = require('nightwatch-api');

const element = {
  panduanBeli: '.yCmsComponent.__buying-guide',
  bannerBeli: '.info-text',
  pict1: 'div:nth-child(1) > div > div.imgWrapper > picture > img',
  pict2: 'div:nth-child(2) > div > div.imgWrapper > picture > img',
  pict3: 'div:nth-child(3) > div > div.imgWrapper > picture > img',
  pict4: 'div:nth-child(4) > div > div.imgWrapper > picture > img',
  titleContent1: 'div.yCmsContentSlot.how-to-buy-Wrapper > div:nth-child(1) > div > div.contentWrapper > h3',
  titleContent2: 'div.yCmsContentSlot.how-to-buy-Wrapper > div:nth-child(2) > div > div.contentWrapper > h3',
  titleContent3: 'div.yCmsContentSlot.how-to-buy-Wrapper > div:nth-child(3) > div > div.contentWrapper > h3',
  titleContent4: 'div.yCmsContentSlot.how-to-buy-Wrapper > div:nth-child(4) > div > div.contentWrapper > h3',
  content1: 'div:nth-child(1) > div > div.contentWrapper > div > p.content',
  content2: 'div:nth-child(2) > div > div.contentWrapper > div > p.content',
  content3: 'div:nth-child(3) > div > div.contentWrapper > div > p.content',
  content4: 'div:nth-child(4) > div > div.contentWrapper > div > p.content',
  button: '.btn',
};

export const clickPanduan = async () => {
  await base.clickElement(element.panduanBeli);
};

export const verifyPanduan = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/howtobuy');
  await base.expectVisible(element.pict1);
  await base.assertContainsText(element.titleContent1, 'Temukan Mobil Daihatsu Impianmu');
  await base.assertContainsText(element.content1, 'Ketik nama mobil Daihatsu di kolom pencarian atau pilih Kategori untuk memudahkanmu mencari.');
  await base.expectVisible(element.pict2);
  await base.assertContainsText(element.titleContent2, 'Cek Informasi Mobil');
  await base.assertContainsText(element.content2, 'Anda bisa mengetahui info lebih lanjut dari mobil yang ingin dibeli.');
  await base.expectVisible(element.pict3);
  //   await base.assertContainsText(element.titleContent3, 'Yakinkan Diri dan Klik ''Minta Penawaran Terbaik''');
  await base.assertContainsText(element.content3, 'Pilih tombol "Minta Penawaran Terbaik" untuk melanjutkan pesanan kendaraan anda.');
  await base.expectVisible(element.pict4);
  await base.assertContainsText(element.titleContent4, 'Pastikan Lagi Detail Pesanan Anda');
  await base.assertContainsText(element.content4, 'Cek semua info tentang detail kendaraan, harga, dan informasi data diri. Pastikan semua sudah benar sebelum pilih metode bayar');
};
