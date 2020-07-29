Feature: PLP 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @filter @category
   Scenario: As a guest, I can filter cars by category on PLP
   Then a guest can see the cars filtered by category

   @DAYTONA-408 @filter @capacity
   Scenario: As a guest, I can filter cars by capacity on PLP
   Then a guest can see the cars filtered by capacity

   @DAYTONA-408 @filter @transmision
   Scenario: As a guest, I can filter cars by transmision on PLP
   Then a guest can see the cars filtered by transmision