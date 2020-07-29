Feature: Header 1 A

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-402 @home
   Scenario: As a guest, I can see Header 1 contents on Home page
   Then a guest can see Header 1 contents on Home page

   @DAYTONA-402 @tentang
   Scenario: As a guest, I can access Tentang Astra Daihatsu Page through Header 1
   When a guest try to access Tentang Astra Daihatsu Page through Header 1
   Then a guest can access Tentang Astra Daihatsu Page