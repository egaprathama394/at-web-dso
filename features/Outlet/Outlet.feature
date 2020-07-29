Feature: Dealer Listing Page

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-537
   Scenario: As a customer, I can access Dealer page
   When a guest try to click Outlet Page
   And a guest try to search 'Astra Daihatsu Harmoni' Outlet
   And a guest try to click Bali and Jakarta
   And a guest try to click Penunjuk Arah outlet Pecenongan
   Then a guest can see Gmaps Pecenongan on Outlet Page


