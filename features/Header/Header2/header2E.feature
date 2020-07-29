Feature: Header 2 E

   Background: Open DSO Home page
   Given a guest is at DSO Home page 

   @DAYTONA-441 @Notif
   Scenario: As a guest, I can see Notification page through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer can see Notification drop down
   And a customer try to access Notification Page through Header 2
   Then a customer can see Notification Page

   @DAYTONA-441 @Riwayat @ContactUs
   Scenario: As a guest, I can access Riwayat Hubungi Kami Page through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Riwayat Hubungi Kami through Header 2
   Then a customer can see Riwayat Hubungi Kami Page

   @DAYTONA-441 @Profil
   Scenario: As a guest, I can access Suku Cadang Page through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   When a customer try to access Akun Saya page
   Then a customer can see 'Selamat Datang  test baby !' at the welcome text