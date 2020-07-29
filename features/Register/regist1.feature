Feature: Register 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-416 @page
   Scenario: As a guest, I can access Register page through Home page
   When a guest try to access Register page
   Then a guest can see Register page

   @DAYTONA-416 @email
   Scenario: As a guest, I can regist successfully using email
   When a guest try to access Register page
   And a guest try to regist using random email
   And a guest try to fill registration form using 'Test Baby' '8121816444' 'Baby123123'
   Then a guest can see alert 'Tinggal satu langkah lagi untuk menyelesaikan pendaftaran Anda. Silakan klik tautan pada email yang dikirimkan pada Anda untuk menyelesaikan pendaftaran Anda di Astra Daihatsu.'