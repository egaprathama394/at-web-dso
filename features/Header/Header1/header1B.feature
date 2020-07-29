Feature: Header 1 B

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-402 @panduan
   Scenario: As a guest, I can access Panduan Pembelian Page through Header 1
   When a guest try to access Panduan Pembelian Page through Header 1
   Then a guest can access Panduan Pembelian Page

   @DAYTONA-402 @hubungi
   Scenario: As a guest, I can access Hubungi Kami Page through Header 1
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   When a guest try to access Hubungi Kami Page through Header 1
   Then a guest can access Hubungi Kami Page