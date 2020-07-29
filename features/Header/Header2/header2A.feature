Feature: Header 2 A

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-441 @home @guest
   Scenario: As a guest, I can see Header 2 content on Home page
   Then a guest can see Header 2 contents on Home page

   @DAYTONA-441 @home @customer
   Scenario: As a customer, I can see Header 2 content on Home page
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   Then a customer can see Header 2 contents on Home page

   # @DAYTONA-441 @cari ada bugs
   # Scenario: As a guest, I can search car through Header 2
   # When a guest try to search 'TERIOS' through Header 2
   # Then a guest can see car suggestions