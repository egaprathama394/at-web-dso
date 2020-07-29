Feature: Promo

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @CheckingIconFooter
   Scenario: As a guest, I can see Promo on Home page
   Then a guest can see icon promo on Home page

   Scenario: As a guest, I can access Promo Pages on Homepage
   When a guest click Promo
   Then a guest can see content menu Promo