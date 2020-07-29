Feature: Home Page 2(Vehicle Type SUV,MVP)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-403
   Scenario: As a guest, I can see VehicleType on Home page
   Then a guest can see Vehicle Type on Home page

   @DAYTONA-403
   Scenario: As a guest, I can see SUV PLP page
   When a guest click SUV icon
   Then a guest can see SUV PLP page 

   @DAYTONA-403
   Scenario: As a guest, I can see MVP PLP page
   When a guest click MPV icon
   Then a guest can see MPV PLP page