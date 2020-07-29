Feature: Booking Service 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-524 @BSpage
   Scenario: As a customer, I can see Booking Service Page
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   Then a customer can see Booking Service Page

   @DAYTONA-524 @submit
   Scenario: As a customer, I can successfully submit a Booking Service form
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail Servis 'AYLA' '2020' 'QA123DSO' '1.000 KM' 'Catatan/Keluhan' 'Astra Daihatsu Sunter' 'pilihtanggal' 'pilihjam'
   And a customer try to fill Detail informasi Pemesan 'Baby' '80989999' 'aci66v@gmail.com'
   And a customer try to click button KIRIM KODE
   And a customer try to input OTP '180794'
   And a customer try to submit Booking Service form
   Then a customer can see Thank You Page for Booking Service