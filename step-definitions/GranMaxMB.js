import * as about from '../pages/GranMaxMB';

const { Then } = require('cucumber');

Then(/^a guest can see GranMax Mini Bus on Home page$/, async () => {
  await about.GMMB();
});
