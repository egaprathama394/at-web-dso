Feature: Footer1 ( Icon Produk Footer, Ayla Footer, Sigra Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access See Icon Produk in footer
   Then a guest can see Icon Produk in footer

   @DAYTONA-431
   Scenario: As a guest, I can access Ayla Pages on PLP
   When a guest click Ayla on footer
   Then a guest can see content Ayla in PLP Page

   @DAYTONA-431
   Scenario: As a guest, I can access Sigra Pages on PLP
   When a guest click Sigra on footer
   Then a guest can see content Sigra in PLP Page