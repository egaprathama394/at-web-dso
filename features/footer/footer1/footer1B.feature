Feature: Footer1 (Hubungi Kami Footer, Lokasi Outlet Footer, Berita Footer)

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-431a
   Scenario: As a guest, I can access Hubungi Kami Pages on Footer
   When a guest click Hubungi Kami on footer
   When a guest login using emaill 'aci66v@gmail.com' and password 'baby134137'
   Then a guest can see content menu Hubungi Kami on Footer

   @DAYTONA-431b
   Scenario: As a guest, I can access Lokasi Outlet Pages on Footer
   When a gust click Lokasi Outlet on footer
   Then a guest can see content menu Outlet on Footer

   @DAYTONA-431
   Scenario: As a guest, I can access Berita Pages on Footer
   When a gust click Berita on footer
   Then a guest can see content menu Berita on Footer
