Feature: Footer1 (Xenia Footer, Purna Jual Footer,  Perawatan Berkala Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access Xenia Pages on PLP
   When a guest click Xenia on footer
   Then a guest can see content Xenia in PLP Page

   @DAYTONA-431
   Scenario: As a guest, I can access See Icon Purna Jual in footer
   Then a guest can see Icon Purna Jual in footer
    
   @DAYTONA-431
   Scenario: As a guest, I can access Perawatan Berkala Pages 
   When a guest click Perawatan Berkala on footer
   Then a guest can see content Perawatan Berkala page

   