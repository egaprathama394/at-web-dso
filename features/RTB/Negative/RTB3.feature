Feature: Negative RTB 3

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Email
   Scenario: As a customer, I can see validation if I input an invalid email
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to click YA on Cart Confirmation
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'acimail' '80989999' 'test' 'baby' 'Signature Park Grande'
   Then a customer can see invalid email validation 'Mohon masukkan alamat email yang benar'

#    @DAYTONA-722 @Nama @Depan ----- Bug : belum ada validasi
#    Scenario: As a customer, I can see validation if I input an invalid email
#    When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
#    And a guest try to click MASUK
#    And a customer try to buy car through PLP
#    And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'acimail' '80989999' '123123' 'baby' 'Signature Park Grande'
#    Then a customer can see invalid email validation 'Kolom ini hanya boleh berisi huruf alphabet'

#    @DAYTONA-722 @Nama @Belakang
#    Scenario: As a customer, I can see validation if I input an invalid email
#    When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
#    And a guest try to click MASUK
#    And a customer try to buy car through PLP
#    And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'acimail' '80989999' 'test' '123123' 'Signature Park Grande'
#    Then a customer can see invalid email validation 'Kolom ini hanya boleh berisi huruf alphabet'