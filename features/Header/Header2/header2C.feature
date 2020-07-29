Feature: Header 2 C

   Background: Open DSO Home page
   Given a guest is at DSO Home page 

   @DAYTONA-441 @service
   Scenario: As a guest, I can access Booking Service Page through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page through Header 2
   Then a customer can see Booking Service Page

   @DAYTONA-441 @outlet
   Scenario: As a guest, I can access Outlet Page through Header 2
   When a guest try to access Outlet Page through Header 2
   Then a guest can access Outlet Page

   # # Belum ada di QA
   # @DAYTONA-441 @sparepart
   # Scenario: As a guest, I can access Suku Cadang Page through Header 2
   # When a guest try to access Suku Cadang Page through Header 2
   # Then a guest can see content Suku Cadang Page