Feature: Request Test Drive Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-720
   Scenario: As a customer, I can buy car through PLP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a guest try to access Test Drive Page through Header 2
   And I input '' '' ''
   Then a customer can see Validation

