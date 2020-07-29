Feature: Header 2 B

   Background: Open DSO Home page
   Given a guest is at DSO Home page 

   @DAYTONA-441 @promo
   Scenario: As a guest, I can access Promo Page through Header 2
   When a guest try to access Promo Page through Header 2
   Then a guest can see content Promo Page

   @DAYTONA-441 @berita
   Scenario: As a guest, I can access Berita Page through Header 2
   When a guest try to access Berita Page through Header 2
   Then a guest can see News and Article page

   @DAYTONA-441  @testdrive
   Scenario: As a guest, I can access Test Drive Page through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a guest try to access Test Drive Page through Header 2
   Then a customer can see Test Drive Page