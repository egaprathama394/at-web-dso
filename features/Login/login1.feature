Feature: Login 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-414 @page
   Scenario: As a guest, I can access Login page
   When a guest try to access Login page
   Then a guest can see Login page

   @DAYTONA-414 @smoke @login
   Scenario: As a guest, I can login successfully using email
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Akun Saya page
   Then a customer can see 'Selamat Datang  test baby !' at the welcome text

   @DAYTONA-414 @eye
   Scenario: As a customer, I can see the password when I click the eye icon
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click eye icon
   Then a guest can see the password
