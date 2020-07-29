Feature: PLP 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @PLP
   Scenario: As a guest, I can see PLP
   When a guest try to access PLP
   Then a guest can see PLP

   @DAYTONA-408 @wishlist
   Scenario: As a guest, I can put car to wishlist on PLP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to like a car on PLP
   And a customer try to access Wishlist page
   Then a customer can see the cars at Wishlist page
