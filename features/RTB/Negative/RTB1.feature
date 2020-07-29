Feature: Negative RTB 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Empty
   Scenario: As a customer, I can see validations at all fields
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to fill the Informasi Pribadi form using '' '' '' '' ''
   And a customer try to click button Minta Penawaran at Checkout
   Then a customer can see all validations 'Field ini diperlukan'
   
   @DAYTONA-722 @Outlet
   Scenario: As a customer, I can't find unknown outlet
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to find outlet 'PERTH'
   Then a customer can see result 'Tidak ada hasil yang ditemukan' at Outlet field