import * as about from '../pages/Ayla';

const { Then } = require('cucumber');

Then(/^a guest can see Ayla on Home page$/, async () => {
  await about.AylaList();
});
