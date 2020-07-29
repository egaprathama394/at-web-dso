import * as Outlet from '../pages/GmapsOutlet';


const { Then } = require('cucumber');
const { client } = require('nightwatch-api');

Then(/^a guest can see Gmaps Pecenongan on Outlet Page$/, async () => {
  await Outlet.clickArah();
});
