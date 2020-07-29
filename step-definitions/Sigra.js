import * as about from '../pages/Sigra';

const { Then } = require('cucumber');

Then(/^a guest can see Sigra on Home page$/, async () => {
  await about.SigraList();
});
