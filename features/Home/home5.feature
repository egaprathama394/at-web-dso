Feature: Home Page 5(ProductList:Sirion,Terios,Xenia)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-444 @SirionList
   Scenario: As a guest, I can see Sirion on Product List Home page
   When a guest click Sirion on Home page
   Then a guest can see Sirion on Home page

   @DAYTONA-444 @TeriosList
   Scenario: As a guest, I can see Terios on Product List Home page
   When a guest click Terios on Home page
   Then a guest can see Terios on Home page

   @DAYTONA-444 @XeniaList
   Scenario: As a guest, I can see Xenia on Product List Home page
   When a guest click Xenia on Home page
   Then a guest can see Xenia on Home page