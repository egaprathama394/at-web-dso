Feature: Footer1 ( Blind Van Footer, GM Mini Bus Footer, GM Pick Up Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431d
   Scenario: As a guest, I can access BlindVan Pages on PLP
   When a guest click Blind Van on footer
   Then a guest can see content BlinVan in PLP Page

   @DAYTONA-431e
   Scenario: As a guest, I can access Mini Bus Pages on PLP
   When a guest click Mini Bus on footer
   Then a guest can see content Mini Bus in PLP Page

   @DAYTONA-431f
   Scenario: As a guest, I can access Pick Up Pages on PLP
   When a guest click Pick Up on footer
   Then a guest can see content Pick Up in PLP Page