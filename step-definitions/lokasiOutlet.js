import * as Outlet from '../pages/lokasiOutlet';


const { When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

// yosua
Then(/^a guest can see content menu Outlet on Footer$/, async () => {
  await Outlet.clickOutletFooter();
});

// eslint-disable-next-line no-shadow
When(/^a guest try to search '([^"]*)' Outlet$/, async (OutletHarmoni) => {
  client.pause(2000);
  await Outlet.ketikdropdown('OutletHarmoni', OutletHarmoni);
});

When(/^a guest try to click Bali and Jakarta$/, async () => {
  await Outlet.clickKota();
});

When(/^a guest try to click Penunjuk Arah outlet Pecenongan$/, async () => {
  await Outlet.clickPecenongan();
});

// Baby - header2C.feature
Then(/^a guest can access Outlet Page$/, async () => {
  await Outlet.verifyOutlet();
});
