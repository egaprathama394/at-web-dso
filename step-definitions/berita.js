import * as news from '../pages/berita';

const { When, Then } = require('cucumber');

// Berita 1 A

When(/^a guest try to access News & Article page through Home page$/, async () => {
  await news.accessBerita();
});

Then(/^a guest can see News and Article page$/, async () => {
  await news.urlBerita();
});

Then(/^a guest can bookmark articles on News & Article page$/, async () => {
  await news.bookmark();
});

When(/^a guest try to choose article through News & Article page$/, async () => {
  await news.chooseArticle();
});

Then(/^a guest can read article$/, async () => {
  await news.readArticle();
});

// Berita Footer

Then(/^a guest can see content menu Berita on Footer$/, async () => {
  await news.verifyIconFooterBerita();
});
