Feature: Request to Buy

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-526 @PLP
   Scenario: As a customer, I can buy car through PLP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PLP
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande'
   And a customer try to input buy car OTP '180794'
   Then a customer can see Thank You Page

   @DAYTONA-526 @PDP @Cash
   Scenario: As a customer, I can buy car through PDP by cash
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PDP using 'cash' metode
   And a customer try to click Minta Penawaran on PDP
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande'
   And a customer try to input buy car OTP '180794'
   Then a customer can see Thank You Page

   @DAYTONA-526 @PDP @Credit
   Scenario: As a customer, I can buy car through PDP by credit
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to buy car through PDP using 'kredit' metode
   And a customer choose 'DP50' and 'cicil2tahun'
   And a customer try to click Minta Penawaran on PDP
   And a customer try to fill the Checkout form using 'Astra Daihatsu Sunter - KOTA JAKARTA UTARA' 'aci66v@gmail.com' '80989999' 'test' 'baby' 'Signature Park Grande'
   And a customer try to input buy car OTP '180794'
   Then a customer can see Thank You Page