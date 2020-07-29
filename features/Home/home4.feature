Feature: Home Page 4 (Static Cara Pesan and Static Purna Jual)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-255 @static @carapesan
   Scenario: As a guest, I can see static Cara Pesan on Home page
   Then a guest can see Static Cara Pesan on Home page

   @DAYTONA-466 @static @purnajual
   Scenario: As a guest, I can see static Purnajual 1 on Home page
   Then a customer can see Static Purnajual 1 on Home page

   @DAYTONA-466 @static @purnajual
   Scenario: As a guest, I can see static Purnajual 2 on Home page
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   Then a customer can see Static Purnajual 2 on Home page