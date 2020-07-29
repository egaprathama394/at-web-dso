Feature: Negative RTB 4

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Less
   Scenario: As a customer, I can see validation if I input less than 8 digits in Nomor Handphone field
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '8098' 'test' 'baby' 'Signature Park Grande'
   Then a customer can see invalid nomor handphone validation 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'

   @DAYTONA-722 @More
   Scenario: As a customer, I can see validation if I input more than 8 digits in Nomor Handphone field
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999000088' 'test' 'baby' 'Signature Park Grande'
   Then a customer can see invalid nomor handphone validation 'Nomor harus dimulai dengan angka 8, Minimal 8 angka, Maksimal 13 angka.'