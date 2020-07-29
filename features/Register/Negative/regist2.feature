Feature: Register Negative 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-416 @regist
   Scenario: As a guest, I can see validation if I click button DAFTAR without input any field
   When a guest try to access Register page
   And a guest try to regist using email 'teeebski@mail.com'
   And a guest try to fill registration form using '' '' ''
   And a guest try to click random at the form
   Then a guest can see validation 'Field ini diperlukan' at all fields

   @DAYTONA-416 @name
   Scenario: As a guest, I can see validation if I input number at field Nama Lengkap
   When a guest try to access Register page
   And a guest try to regist using email 'teeebski@mail.com'
   And a guest try to fill registration form using '123456' '85764492623' 'baby134137'
   Then a guest can see validation 'Kolom ini hanya boleh berisi huruf alphabet' at Nama Lengkap field