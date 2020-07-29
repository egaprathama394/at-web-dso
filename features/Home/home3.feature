Feature: Home Page 3(Vehicle Type Niaga ,CityCar, Semua PLP)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-403
   Scenario: As a guest, I can see Kendaraan Niaga PLP page
   When a guest click Kendaraan Niaga icon
   Then a guest can see Kendaraan Niaga PLP page 

   @DAYTONA-403
   Scenario: As a guest, I can see City Car PLP page
   When a guest click City Car icon
   Then a guest can see City Car PLP page

   @DAYTONA-403
   Scenario: As a guest, I can see Semua PLP page
   When a guest click All icon
   Then a guest can see All PLP page 