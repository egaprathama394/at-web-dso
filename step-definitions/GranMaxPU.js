import * as about from '../pages/GranMaxPU';

const { Then } = require('cucumber');

Then(/^a guest can see GranMax Pick Up on Home page$/, async () => {
  await about.GMPU();
});
