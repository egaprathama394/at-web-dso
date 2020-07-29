Feature: PLP 3

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @sort @relevant
   Scenario: As a guest, I can sort cars by Relevansi on PLP
   Then a guest can see the cars sorted by Relevansi

   @DAYTONA-408 @sort @price @low
   Scenario: As a guest, I can sort cars by price from low to high on PLP
   Then a guest can see the cars sorted from low to high price

   @DAYTONA-408 @sort @price @high
   Scenario: As a guest, I can sort cars by price from high to low on PLP
   Then a guest can see the cars sorted from high to low price