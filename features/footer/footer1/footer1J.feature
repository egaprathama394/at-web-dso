Feature: Footer1 ( Simulasi Kredit Footer, Promo Footer, Bodi dan Cat Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access Simulasi Kredit Pages 
   When a guest click Simulasi Kredit on footer
   Then a guest can see content Simulasi Kredit Page

   @DAYTONA-431
   Scenario: As a guest, I can access Promo Pages
    When a guest click Promo on footer
   Then a guest can see content Promo Page

   @DAYTONA-431
   Scenario: As a guest, I can access Bodi Dan Cat Pages
   When a guest click Bodi Dan Cat on footer
   Then a guest can see content Bodi Dan Cat Page

 