import * as about from '../pages/Sirion';

const { Then } = require('cucumber');

Then(/^a guest can see Sirion on Home page$/, async () => {
  await about.SirionList();
});
