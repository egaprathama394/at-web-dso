import * as notif from '../pages/notification';

const { Then } = require('cucumber');

Then(/^a customer can see Notification Page$/, async () => {
  await notif.verifyNotif();
});
