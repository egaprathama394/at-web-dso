Feature: Booking Service Negative 4

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @HP @Less
   Scenario: As a customer, I can see validation if I input number less than 8 digits at Nomor Handphone
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan 'Baby' '8888' 'aci66v@gmail.com'
   Then a customer can see wording 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.' at Nomor Handphone field

   @DAYTONA-722 @HP @More
   Scenario: As a customer, I can see validation if I input number more than 13 digits at Nomor Handphone
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan 'Baby' '82345678901234' 'aci66v@gmail.com'
   Then a customer can see wording 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.' at Nomor Handphone field