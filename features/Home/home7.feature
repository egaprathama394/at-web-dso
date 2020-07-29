Feature: Home Page 7 (ProductList:Luxio,Ayla,LihatSemua)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-444 @LuxioList
   Scenario: As a guest, I can see Luxio on Product List Home page
   When a guest click Luxio on Home page
   Then a guest can see Luxio on Home page

   @DAYTONA-444 @AylaList
   Scenario: As a guest, I can see Ayla on Product List Home page
   When a guest click Ayla on Home page
   Then a guest can see Ayla on Home page

   @DAYTONA-444 @LihatSemua
   Scenario: As a guest, I can see Lihat Semua on Product List Home page
   When a guest click Lihat Semua on Home page
   Then a guest can see Lihat Semua on Home page