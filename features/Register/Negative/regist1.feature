Feature: Register Negative 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-416 @nonactive
   Scenario: As a guest, I can see alert when I use unverified email
   When a guest try to access Register page
   And a guest try to regist using email 'baby@mail.com'
   And a guest try to fill registration form using 'baby' '85764492623' 'baby134137'
   Then a guest can see alert 'Email belum aktif, Silakan periksa email Anda untuk memverifikasi akun Anda.'

   @DAYTONA-416 @empty
   Scenario: As a guest, I can see validation if I click button LANJUTKAN without input any field
   When a guest try to access Register page
   And a guest try to regist using email ''
   Then a guest can see validation 'Field ini diperlukan'

   @DAYTONA-416 @invalid
   Scenario: As a guest, I can see validation if I input invalid email
   When a guest try to access Register page
   And a guest try to regist using email 'tebsmailcom'
   And a guest try to click random
   Then a guest can see validation 'Mohon masukkan alamat email yang benar'
