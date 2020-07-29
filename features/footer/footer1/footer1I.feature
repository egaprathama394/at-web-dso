Feature: Footer1 ( Booking Service Footer, Icon Beli Daihatsu Footer, Daftar Harga Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431
   Scenario: As a guest, I can access Booking Service Pages
   When a guest click Booking Service on footer
   When a guest login using emaill 'aci66v@gmail.com' and password 'baby134137'
   Then a guest can see content Booking Service Kami Page

   @DAYTONA-431
   Scenario: As a guest, I can access See Icon Beli Daihatsu in footer
   Then a guest can see Icon Beli Daihatsu in footer

   @DAYTONA-431
   Scenario: As a guest, I can access Daftar Harga Pages
   When a guest click Daftar Harga on footer
   Then a guest can see content Daftar Harga Page
