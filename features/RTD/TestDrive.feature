Feature: Request Test Drive

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-529 
   Scenario: As a customer, I can buy car through PLP
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a guest try to access Test Drive Page through Header 2
   And I inputt 'AYLA M.T' 'yosua panondang' 'yosuasiagian95@gmail.com' '81299459292' 'Sunter' 'Bekasi' 'tanggal2' 'time' 'Tidak ada'
   Then a customer can see Thank You on Pop Up Test Drive

