Feature: Footer1 (All icon Footer, Tentang Kami Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can see Footer on Home page
   Then a guest can see All icon footer on Home page
   
   @DAYTONA-431
   Scenario: As a guest, I can access Tentang Kami Pages on Footer
   When a gust click Tentang Kami on footer
   Then a guest can see content menu Tentang kami on Footer
