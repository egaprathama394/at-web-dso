import * as about from '../pages/PerawatanBerkala';

const { Then } = require('cucumber');

Then(/^a guest can see content Perawatan Berkala page$/, async () => {
  await about.verifyPerawatanBerkala();
});
