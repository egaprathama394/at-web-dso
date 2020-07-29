Feature: Header 2 D

   Background: Open DSO Home page
   Given a guest is at DSO Home page 

   @DAYTONA-441 @login
   Scenario: As a guest, I can access Login Page through Header 2
   When a guest try to access Login Page through Header 2
   Then a guest can see Login page

   @DAYTONA-441 @logout
   Scenario: As a guest, I can access Logout through Header 2
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to logout
   Then a customer cant see several content on Header 2

   @DAYTONA-441 @daftar
   Scenario: As a guest, I can access Registrasi Page through Header 2
   When a guest try to access Registrasi Page through Header 2
   Then a guest can see Register page
