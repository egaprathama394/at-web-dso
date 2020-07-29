Feature: Home Page 1 (Main Banner and Promo Banner)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   # @All
   # Scenario: As a guest, I can see contents on Home page
   # Then a guest can see all contents on Home page

   @DAYTONA-440 @Main @Banner
   Scenario: As a guest, I can see Main Banner on Home page
   Then a guest can see Main Banner on Home page

   @DAYTONA-439 @Promo @Banner
   Scenario: As a guest, I can see Promo Banner on Home page
   Then a guest can see Promo Banner on Home page