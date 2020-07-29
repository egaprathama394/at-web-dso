import * as about from '../pages/Terios';

const { Then } = require('cucumber');

Then(/^a guest can see Terios on Home page$/, async () => {
  await about.TeriosList();
});
