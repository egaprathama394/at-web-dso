import * as acc from '../pages/Accessories';

const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

/* ----------------------------------------------------------------------------------------- */
//                                       Hearder                                             //
/* ----------------------------------------------------------------------------------------- */

// Accessories Page
Given('a guest is at DSO Accessories Page', async () => {
  await client.url('https://qa.astra-daihatsu.id/in/oto/mobil/Sparepart/c/SPAREPART');
});

// AccessoriesHeader @Page
When('a guest click menu Accessories', async () => {
  await acc.clickAccessories();
});

Then('a guest can see Accessories Page', async () => {
  await acc.verifyPage();
});

// AccessoriesHeader @Banner
Then('a guest can see Banner Accessories', async () => {
  await acc.verifyBanner();
});

// AccessoriesHeader @FiveAcc
Then('a guest can see Top 5 Accessories', async () => {
  await acc.verifyTopFive();
});

/* ----------------------------------------------------------------------------------------- */
//                                        Search                                             //
/* ----------------------------------------------------------------------------------------- */

When('a guest click Cari Button', async () => {
  await acc.clickButtonCari();
});

Then('a guest can see Accessories that related by search', async () => {
  if (this.year === '2013') {
    await acc.verifyAccessoriesList();
  } else if (this.year === '2014') {
    await acc.verifyNotFound();
  } else {
    await acc.verifyAccessoriesList();
  }
});

// AccessoriesSearch @ModelKendaran
Given('Model Kendaraan {string}', async (model) => {
  await acc.chooseModel(model);
});

Then('a guest can see Filter that related by search', async () => {
  await acc.verfyFilterList();
});

// AccessoriesSearch @Year
Given('Year {string}', async (year) => {
  this.pilihyear = year;
  acc.chooseYear(year);
});


// AccessoriesSearch @NotificationModelKendaraan
Given('Year filled {string}', async (verify) => {
  if (verify === 'N') {
    acc.cariButtonVisible();
  } else {
    acc.chooseYear(verify);
  }
});

Then('a guest can see Notification Model Kendaran Must be Filled', async () => {
  await acc.notifModelKendaran();
});

/* ----------------------------------------------------------------------------------------- */
//                                        Filter                                             //
/* ----------------------------------------------------------------------------------------- */

// AccessoriesSearched
Given('accessories has searched by model {string}', async (model) => {
  acc.chooseModel(model);
  acc.clickButtonCari();
});

// AccessoriesFilter
Then('a guest can see Accessories related by filter', async () => {
  if (this.group === '1group') { // @1Group1Category
    if (this.category === 'exterior') {
      acc.verifyOneGroupExt();
    } else if (this.category === 'interior') {
      acc.verifyOneGroupInt();
    } else {
      acc.verifyOneGroupPrice();
    }
  } else if (this.group === 'allgroup') { // @AllGroup1Category
    if (this.category === 'exterior') {
      acc.verifyAllGroupExt();
    } else if (this.category === 'interior') {
      acc.verifyAllGroupInt();
    } else {
      acc.verifyAllGroupPrice();
    }
  } else if (this.category === 'allcategory') { // @1GroupAllCategory
    acc.verifyOneGroupExt();
    acc.verifyOneGroupInt();
    acc.verifyOneGroupPrice();
  }
});

// AccessoriesFilter
When('a guest click {string} of {string}', async (group, category) => {
  this.group = group;
  this.category = category;
  if (this.group === '1group') { // @1Group1Category
    if (this.category === 'exterior') {
      acc.clickOneGroupExt();
    } else if (this.category === 'interior') {
      acc.clickOneGroupInt();
    } else {
      acc.clickOneGroupPrice();
    }
  } else if (this.group === 'allgroup') { // @AllGroup1Category
    if (this.category === 'exterior') {
      acc.clickAllGroupExt();
    } else if (this.category === 'interior') {
      acc.clickAllGroupInt();
    } else {
      acc.clickAllGroupPrice();
    }
  } else if (this.category === 'allcategory') { // @1GroupAllCategory
    acc.clickOneGroupExt();
    acc.clickOneGroupInt();
    acc.clickOneGroupPrice();
  }
});

// Accessories UnFilter
Given('accessories has filtered by Side Visor', async () => {
  acc.clickOneGroupExt();
});

When('a guest uncheck the checkbox Side Visor', async () => {
  acc.clickOneGroupExt();
});

Then('a guest can see all Accessories', async () => {
  acc.verifyAccessoriesList();
});


/* ----------------------------------------------------------------------------------------- */
//                                        PDP                                                //
/* ----------------------------------------------------------------------------------------- */

When('a guest click some Acc', async () => {
  await acc.clickAccessoriesList();
});

Then('a guest can see Detail Acc', async () => {
  await acc.verfyDetailPDP();
});

Then('a guest can see Description Acc', async () => {
  await acc.verfyDescriptionPDP();
});

Then('a guest can see Images Acc', async () => {
  await acc.verfyImagesPDP()
});

Then('a guest can see Recomanded News', async () => {
  await acc.verfyRecomandedNews();
});

Then('a guest can see Another Acc', async () => {
  await acc.verfyAnotherAcc();
});

/* ----------------------------------------------------------------------------------------- */
//                                       Sort                                                //
/* ----------------------------------------------------------------------------------------- */

var sorts = '';

Given('Accesoriess filtered by Alaram', async () => {
  await acc.clickOneGroupInt();
});

When('a guest sort Accessories by {string}', async (sort) => {
  sorts = sort;
  await acc.chooseSort(sort);
});

Then('a guest can see Accessories sorted', async () => {
  if ( sorts === 'relevant' ){
    await acc.verfySortAlpha();
  } else if ( sorts === 'cheap' ) {
    await acc.verfySortCheap();
  } else { 
    await acc.verfySortExpensive();
  }
});