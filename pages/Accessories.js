import * as base from '../common/base-functions';
const { client } = require('nightwatch-api');

const elements = {
  /* ------- Header ------ */
  menuAccesories: '',
  textBannerAccesories: '',
  bannerAccesories: '',
  topFive: '',
  backToTop: '[class="link--gray"]',
  
  /* ------- Search ------ */
  searchTidakDitemukan: '',
  buttonCari: '[class="btn btn-sm"]',
  notificationModelKendaran: '',
  dropdownModel: '[data-select2-id="1"]  [class="select2-selection__rendered"]',
  fieldYear: '[data-select2-id="3"]  [class="select2-selection__rendered"]',
  chooseYear: '',

  /* ------- PLP ------ */
  accessoiresNotFound: '',
  // Verify PLP Vehicle Terios
  textRockerLh: '',
  textRockerRh: '',
  textAdvFr: '',
  textSideVisor: '',
  checkBoxWheelDop: '',
  textFloorMat: '',
  listAcc: '',

  /* ------- Filter ------ */
  // Exterior
  checkBoxBodyKit: '',
  checkBoxSideVisor: '',
  checkBoxWheel: '',
  // Interior
  checkBoxKarpet: '[class="facet-sparepart"]:nth-child(6) [class*="js-facet-extend"]:nth-child(3) span',
  // Harga
  checkBoxHarga1: '',
  checkBoxHarga2: '',
  checkBoxHarga3: '',
  checkBoxHarga4: '',
  resetFilterButton: '',

  /* ------- PDP ------ */
  //Detail
  textHubungiKami:'',
  textNamaModel:'',
  textNamaAksesoris:'',
  textHargaAksesoris:'',
  textDeskripsiSyarat:'',
  buttonHubungi:'',
  shareLink:'',
  //Description
  textModel:'',
  textWarna:'',
  textBahan:'',
  textKelengkapan:'',
  textProduk:'',
  textKodeProduk:'',
  textCatatan:'',
  //News
  recomendationNews:'',
  //Another Acc
  anotherAcc:'',
  //Image
  imagesAcc:'',

  /* ------- Sort ------ */
  sortButon: '[id="select2-sortOptions2-container"]',
};


/* ----------------------------------------------------------------------------------------- */
//                                       Hearder                                             //
/* ----------------------------------------------------------------------------------------- */

// AccessoriesHeader @Page
export const clickAccessories = async () => {
  await base.clickElement(elements.menuAccesories);
};

export const verifyPage = async () => {
  await base.expectVisible(elements.textBannerAccesories);
};

// AccessoriesHeader @Banner
export const verifyBanner = async () => {
  await base.expectVisible(elements.bannerAccesories);
  await base.expectVisible(elements.bannerAccesories);
};

// AccessoriesHeader @FiveAcc
export const verifyTopFive = async () => {
  await base.expectVisible(elements.topFive);
};

/* ----------------------------------------------------------------------------------------- */
//                                        Search                                             //
/* ----------------------------------------------------------------------------------------- */

function setElementModel(model) {
  const setModel = `element${model}`;
  return setModel;
};

export const clickButtonCari = async () => {
  await base.clickElement(elements.buttonCari);
};

export const verifyAccessoriesList = async () => {
  await base.assertContainsText(elements.textRockerLh, 'ROCKER PNL.ADV.MC L/H  PRIMER');
  await base.assertContainsText(elements.textRockerRh, 'ROCKER PNL.ADV.MC R/H  PRIMER');
  await base.assertContainsText(elements.textAdvFr, 'ADV FR CHROME GRILLE   MINOR C');
  await base.assertContainsText(elements.textSideVisor, 'SIDE VISOR');
  await base.assertContainsText(elements.checkBoxWheelDop, 'WHEEL DOP TERIOS TS EXTRA 16');
  await base.assertContainsText(elements.textFloorMat, 'FLOOR MAT BLUDRU CREAM POLOS');
};

export const verfyFilterList = async () => {
  await base.assertContainsText(elements.checkBoxBodyKit, 'BODY KIT');
  await base.assertContainsText(elements.checkBoxKarpet, 'KARPET');
  await base.assertContainsText(elements.checkBoxSideVisor, 'SIDE VISOR');
  await base.assertContainsText(elements.checkBoxWheel, 'VELG & SPARE WHEEL COVER');
};

export const verifyNotFound = async () => {
  await base.expectVisible(elements.accessoiresNotFound);
};

// AccessoriesSearch @ModelKendaran
export const chooseModel = async (model) => {
  await base.clickElement(elements.dropdownModel);
  await base.clickElement(setElementModel(model));
};

// AccessoriesSearch @NotificationModelKendaraan
export const notifModelKendaran = async () => {
  await base.expectVisible(elements.notificationModelKendaran);
};
export const cariButtonVisible = async () => {
  await base.expectVisible(elements.buttonCari);
};

// AccessoriesSearch @Year
export const chooseYear = async () => {
  await base.clickElement(elements.fieldYear);
  await base.clickElement(elements.chooseYear);
};

/* ----------------------------------------------------------------------------------------- */
//                                        Filter                                             //
/* ----------------------------------------------------------------------------------------- */

function setPLPFilter(number) {
  const listPLP = [
    'ROCKER PNL.ADV.MC L/H  PRIMER',
    'ROCKER PNL.ADV.MC R/H  PRIMER',
    'ADV FR CHROME GRILLE   MINOR C',
    'SIDE VISOR',
    'WHEEL DOP TERIOS TS EXTRA 16"',
    'FLOOR MAT BLUDRU CREAM POLOS',
  ];
  const textPLPFilter = `element*${listPLP[number]}`;
  return textPLPFilter;
};

// AccessoriesFilter @1Group1Category @1GroupAllCategory
export const clickOneGroupExt = async () => {
  await base.clickElement(elements.checkBoxSideVisor);
};
export const clickOneGroupInt = async () => {
  await base.scrollToElement(elements.checkBoxKarpet);
  await base.clickElement(elements.checkBoxKarpet);
};

export const clickOneGroupPrice = async () => {
  await base.clickElement(elements.checkBoxHarga1);
};

export const verifyOneGroupExt = async () => {
  await base.expectVisible(setPLPFilter(3));
};

export const verifyOneGroupInt = async () => {
  await base.expectVisible(setPLPFilter(5));
};

export const verifyOneGroupPrice = async () => {
  for (let i = 2; i < 6; i++) {
    await base.expectVisible(setPLPFilter(i));
  }
};

// AccessoriesFilter  @AllGroup1Category
export const clickAllGroupExt = async () => {
  await base.clickElement(elements.checkBoxBodyKit);
  await base.clickElement(elements.checkBoxSideVisor);
  await base.clickElement(elements.checkBoxWheel);
};

export const clickAllGroupInt = async () => {
  await base.clickElement(elements.checkBoxKarpet);
};

export const clickAllGroupPrice = async () => {
  await base.clickElement(elements.checkBoxHarga1);
  await base.clickElement(elements.checkBoxHarga2);
  await base.clickElement(elements.checkBoxHarga3);
  await base.clickElement(elements.checkBoxHarga4);
};

export const verifyAllGroupExt = async () => {
  for (let i = 0; i < 5; i++) {
    await base.expectVisible(setPLPFilter(i));
  }
};

export const verifyAllGroupInt = async () => {
  await base.expectVisible(setPLPFilter(5));
};

export const verifyAllGroupPrice = async () => {
  for (let i = 0; i < 6; i++) {
    await base.expectVisible(setPLPFilter(i));
  }
};

/* ----------------------------------------------------------------------------------------- */
//                                        PDP                                                //
/* ----------------------------------------------------------------------------------------- */

export const clickAccessoriesList = async () => {
  await base.clickElement(elements.listAcc);
};

export const verfyDetailPDP = async () => {
  await base.expectVisible(elements.textHubungiKami);
  await base.expectVisible(elements.textNamaModel);
  await base.expectVisible(elements.textNamaAksesoris);
  await base.expectVisible(elements.textHargaAksesoris);
  await base.expectVisible(elements.textDeskripsiSyarat);
  await base.expectVisible(elements.buttonHubungi);
  await base.expectVisible(elements.shareLink);
};

export const verfyImagesPDP = async () => {
 await base.expectVisible(elements.imagesAcc);
};

export const verfyDescriptionPDP = async () => {
  await base.expectVisible(elements.textModel);
  await base.expectVisible(elements.textWarna);
  await base.expectVisible(elements.textBahan);
  await base.expectVisible(elements.textKelengkapan);
  await base.expectVisible(elements.textProduk);
  await base.expectVisible(elements.textKodeProduk);
  await base.expectVisible(elements.textCatatan);
};

export const verfyRecomandedNews = async () => {
  await base.scrollToElement(elements.recomendationNews);
  await base.expectVisible(elements.recomendationNews);
};
export const verfyAnotherAcc = async () => {
  await base.scrollToElement(elements.anotherAcc);
  await base.expectVisible(elements.anotherAcc);
};

/* ----------------------------------------------------------------------------------------- */
//                                        Sort                                               //
/* ----------------------------------------------------------------------------------------- */

function setSort(sort) {
  const elementsSort = {
    relevant: 'li[class*="select2-results__option"]:nth-child(1)',
    cheap: 'li[class*="select2-results__option"]:nth-child(2)',
    expensive: 'li[class*="select2-results__option"]:nth-child(3)'
  };
  if (sort === 'relevant') { return elementsSort.relevant }
  else if (sort === 'cheap') { return elementsSort.cheap }
  else { return elementsSort.expensive }
};

var countElements = 0;

export const chooseSort = async (sort) => {
  await base.clickElement(elements.sortButon);
  await base.clickElement(setSort(sort));
  await client.elements('css selector', '[class*="wishlist-items"]', (result) => { countElements = result.value.length });
};

export const verfySortAlpha = async () => {
  var listData = [];
  for ( let i = 0; i < countElements; i++ ) {
    await client.getText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name prod_name"]:nth-child(2)`, (result) => {
      listData.push(result.value);
    });
  };
  for ( let i = 0; i < countElements; i++ ) {
    await client.assert.containsText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name prod_name"]:nth-child(2)`, listData[i]);
  };
};

export const verfySortCheap = async () => {
  var listData = [];
  for ( let i = 0; i < countElements; i++ ) {
    await client.getText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name _rp"]`, (result) => {
      listData.push(result.value);
    });
  };
  await listData.sort();
  for ( let i = 0; i < countElements; i++ ) {
    await client.assert.containsText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name _rp"]`, listData[i]);
  };
};

export const verfySortExpensive = async () => {
  var listData = [];
  for ( let i = 0; i < countElements; i++ ) {
    await client.getText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name _rp"]`, (result) => {
      listData.push(result.value);
    });
  };
  await listData.sort().reverse();
  for ( let i = 0; i < countElements; i++ ) {
    await client.assert.containsText(`[class*="wishlist-items"]:nth-child(${i+1}) [class="_brand-name _rp"]`, listData[i]);
  };
};