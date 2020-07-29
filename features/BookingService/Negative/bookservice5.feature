Feature: Booking Service Negative 5

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @HP @8
   Scenario: As a customer, I can see validation if I didn't input 8 for the first digit at Nomor Handphone
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan 'Baby' '980989999' 'aci66v@gmail.com'
   Then a customer can see wording 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.' at Nomor Handphone field

   @DAYTONA-722 @HP @Alphabet
   Scenario: As a customer, I can see validation if I input alphabet at Nomor Handphone
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan 'Baby' '80989999ABC' 'aci66v@gmail.com'
   Then a customer can see wording 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.' at Nomor Handphone field