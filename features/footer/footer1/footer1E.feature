Feature: Footer1 (Luxio Footer, Sirion Footer, Terios Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access Luxio Pages on PLP
   When a guest click Luxio on footer
   Then a guest can see content Luxio in PLP Page

   @DAYTONA-431
   Scenario: As a guest, I can access Sirion Pages on PLP
   When a guest click Sirion on footer
   Then a guest can see content Sirion in PLP Page

   @DAYTONA-431
   Scenario: As a guest, I can access Terios Pages on PLP
   When a guest click Terios on footer
   Then a guest can see content Terios in PLP Page



