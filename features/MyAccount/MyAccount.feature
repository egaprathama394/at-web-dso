Feature: Login 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   # @DAYTONA-719 @smoke @myaccount
   # Scenario: As a guest, I can access my account page
   # When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   # And a guest try to click MASUK
   # And a customer try to access Akun Saya page
   # Then a customer can see 'Selamat Datang  test baby !' at the welcome text

    @DAYTONA-719 @smoke @myaccount
   Scenario: As a guest, I can access my account page
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Akun Saya page
   And a customer fill nama depan dan belakang 'sarah' 'ramadhani'
   And a customer fill date 'tanggal' 