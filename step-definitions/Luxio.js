import * as about from '../pages/Luxio';

const { Then } = require('cucumber');

Then(/^a guest can see Luxio on Home page$/, async () => {
  await about.LuxioList();
});
