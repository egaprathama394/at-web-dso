Feature: Header 3 A

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-442
   Scenario: As a guest, I can see Header 3 contents on Home page
   Then a guest can see Header 3 contents on Home page

   @DAYTONA-442
   Scenario: As a guest, I can see model Daihatsu through Header 3
   When a guest try to see model Daihatsu
   Then a guest can see model Daihatsu at Header 3
