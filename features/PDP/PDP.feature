Feature: PDP

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-411
   Scenario: As a guest, I can see PDP Page
   When a guest click Sirion on Produclist
   Then a guest can see Sirion in PDP page
