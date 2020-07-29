Feature: Footer1 ( ERA 24 Jam Footer, Suku Cadang Footer, Mobile Service Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access ERA 24 Jam Pages 
   When a guest click ERA 24 Jam on footer
   Then a guest can see content ERA 24 Jam Page

   @DAYTONA-431
   Scenario: As a guest, I can access Suku Cadang Pages 
   When a guest click Suku Cadang on footer
   Then a guest can see content Suku Cadang Page

   @DAYTONA-431
   Scenario: As a guest, I can access Mobile Service Pages 
   When a guest click Mobile Service on footer
   Then a guest can see content Mobile Service Page

