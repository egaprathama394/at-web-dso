Feature: Home Page 6(GranMax BlindVan,PickUp,MiniBus)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-444 @GMBlindVanList
   Scenario: As a guest, I can see GranMax BlindVan on Product List Home page
   When a guest click GranMaxBV on Home page
   Then a guest can see GranMax Blind Van on Home page

   @DAYTONA-444 @GMPickUpList
   Scenario: As a guest, I can see GranMax PickUp on Product List Home page
   When a guest click GranMaxPU on Home page
   Then a guest can see GranMax Pick Up on Home page

   @DAYTONA-444 @GMMiniBus
   Scenario: As a guest, I can see GranMax Mini Bus on Product List Home page
   When a guest click GranMaxMB on Home page
   Then a guest can see GranMax Mini Bus on Home page