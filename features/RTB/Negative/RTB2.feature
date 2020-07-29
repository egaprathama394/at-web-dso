Feature: Negative RTB 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Empty
   Scenario: As a customer, I can see validation if I don't input the OTP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande'
   And a customer try to input buy car OTP ''
   Then a customer can see OTP validation 'Field ini diperlukan'

   @DAYTONA-722 @Invalid
   Scenario: As a customer, I can see validation if I input an invalid OTP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande'
   And a customer try to input buy car OTP '123123'
   Then a customer can see invalid OTP validation 'OTP tidak valid'