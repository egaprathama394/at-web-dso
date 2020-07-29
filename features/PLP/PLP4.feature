Feature: PLP 4

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-408 @Price1
   Scenario: As a guest, I can filter cars by price from Rp 0 - Rp 150 Juta on PLP
   When a guest try to filter car by price from Rp 0 - Rp 150 Juta
   Then a guest can see price breadcrumb 'Rp 0 - Rp 150 Juta'

   @DAYTONA-408 @Price2
   Scenario: As a guest, I can filter cars by price from Rp 150 Juta - Rp 350 Juta on PLP
   When a guest try to filter car by price from Rp 150 Juta - Rp 350 Juta
   Then a guest can see price breadcrumb 'Rp 150 Juta - Rp 350 Juta'

   @DAYTONA-408 @Price3
   Scenario: As a guest, I can filter cars by price from Rp 150 Juta - Rp 200 Juta on PLP
   When a guest try to filter car by price from Rp 150 Juta - Rp 200 Juta
   Then a guest can see price breadcrumb 'Rp 150 Juta - Rp 200 Juta'