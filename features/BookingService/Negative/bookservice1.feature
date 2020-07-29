Feature: Booking Service Negative 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Empty
   Scenario: As a customer, I can see validations if I don't input any fields and directly click button KIRIM KODE
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan '' '' ''
   And a customer try to click button KIRIM KODE
   Then a customer can see validation 'Field ini diperlukan' at any fields

   @DAYTONA-722 @Kategori
   Scenario: As a customer, I can't see any suggestion if I directly click Kategori Servis dropdown
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try click Kategori Servis dropdown on Detail Servis
   Then a customer can see wording ''

   @DAYTONA-722 @Jam
   Scenario: As a customer, I can't see any suggestion if I directly click Jam dropdown
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try click Jam dropdown on Detail Servis
   Then a customer can see wording ''