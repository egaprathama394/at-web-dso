Feature: Register Negative 3

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-416 @invalid
   Scenario: As a guest, I can see validation if I input less than 8 digits and at field Nomor Handphone
   When a guest try to access Register page
   And a guest try to regist using email 'teeebski@mail.com'
   And a guest try to fill registration form using 'test baby' '8888' 'baby134137'
   Then a guest can see validation 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.' at Nomor Handphone field

   @DAYTONA-416 @regist
   Scenario: As a guest, I can see validation if I didn't input 8 as the first number at field Nomor Handphone
   When a guest try to access Register page
   And a guest try to regist using email 'teeebski@mail.com'
   And a guest try to fill registration form using 'test baby' '989089999' 'baby'
   Then a guest can see validation at Password field