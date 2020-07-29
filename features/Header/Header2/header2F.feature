Feature: Header 2 F

   Background: Open DSO Home page
   Given a guest is at DSO Home page 

   @DAYTONA-441 @Cart @Empty
   Scenario: As a customer, I can see my cart is empty
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to see the cart
   Then a customer can see the cart is empty

   @DAYTONA-441 @DAYTONA-526 @Cart @PLP
   Scenario: As a customer, I can see my cart after I Request Buy Car
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer back to Homepage from Checkout Page
   And a customer try to see the cart
   Then a customer can see the Checkout Page

   @DAYTONA-441 @DAYTONA-526 @Cart @Filled
   Scenario: As a customer, I can see my cart is already filled by car and I can directly buy car
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to see the cart
   And a customer try to fill the Checkout form using 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande' 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA'
   And a customer try to input buy car OTP '180794'
   Then a customer can see Thank You Page