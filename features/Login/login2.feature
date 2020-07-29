Feature: Login 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-414 @smoke @logout
   Scenario: As a customer, I can logout successfully
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to logout
   Then a customer cant see several content on Header 2
   
   # Tidak bisa mengakses daytona melalui AT karena alasan keamanan
   # @DAYTONA-414 @gmail
   # Scenario: As a guest, I can login successfully using Google
   # When a guest try to access Google
   # And a guest try to login using Google 'aci66v@gmail.com' and password 'Baby134137'
   # And a customer try to access Akun Saya page
   # Then a customer can see 'Selamat Datang  test baby !' at the welcome text

   # Facebook belum bisa di QA
   # @DAYTONA-414 @fb
   # Scenario: As a guest, I can login successfully using Facebook
   # When a guest try to access Facebook
   # And a guest try to login using Facebook 'yoo_shua@yahoo.com' and password 'letmeknow'
   # And a customer try to access Akun Saya page
   # Then a customer named 'Selamat Datang  Yoshua Dbs !' can see the welcome text