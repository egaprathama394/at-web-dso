import * as about from '../pages/Xenia';

const { Then } = require('cucumber');

Then(/^a guest can see Xenia on Home page$/, async () => {
  await about.XeniaList();
});
