Feature: Booking Service Negative 3

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Nama
   Scenario: As a customer, I can see validation if I input number at Nama Lengkap field
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan '123' '80989999' 'aci66v@gmail.com'
   Then a customer can see wording 'Masukkan hanya huruf saja' at Nama field

   @DAYTONA-722 @Email
   Scenario: As a customer, I can see validation if I input an invalid email at Email field
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail informasi Pemesan 'Baby' '80989999' 'aci66v'
   And a customer try to click button KIRIM KODE
   Then a customer can see wording 'Mohon masukkan alamat email yang benar' at Email field

   @DAYTONA-722 @OTP
   Scenario: As a customer, I can see validation if I input an invalid OTP at OTP field
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill Detail Servis 'AYLA' '2020' 'QA123DSO' '1.000 KM' 'Catatan/Keluhan' 'Astra Daihatsu Sunter' 'pilihtanggal' 'pilihjam'
   And a customer try to fill Detail informasi Pemesan 'Baby' '80989999' 'aci66v@gmail.com'
   And a customer try to click button KIRIM KODE
   And a customer try to input OTP '123123'
   And a customer try to submit Booking Service form
   Then a customer can see wording 'OTP tidak valid' at OTP field