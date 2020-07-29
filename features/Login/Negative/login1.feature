Feature: Login Negative 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-414 @empty
   Scenario: As a guest, I can see validation if I click button MASUK without input any field
   When a guest try to access Login page
   And a guest try to click username and password fields
   And a guest try to click MASUK
   Then a guest can see validation 'Field ini diperlukan' on both fields

   @DAYTONA-414 @invalid @email
   Scenario: As a guest, I can see validation if I input invalid email
   When a guest try to access Login page
   And a guest try to input invalid email 'aci66v' and password 'baby134137'
   And a guest try to click MASUK
   Then a guest can see validation 'Format email salah' and warning icon

   @DAYTONA-414 @invalid @password
   Scenario: As a guest, I can see validation if I input wrong password
   When a guest try to access Login page
   And a guest try to input invalid email 'aci66v@gmail.com' and password 'bebi134137'
   And a guest try to click MASUK
   Then a guest can see validation 'Email atau Password yang Anda masukkan salah' on Login Page
