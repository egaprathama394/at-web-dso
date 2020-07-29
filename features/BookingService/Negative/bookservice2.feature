Feature: Booking Service Negative 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-722 @Model
   Scenario: As a customer, I can't see any suggestion if I search other Model
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill 'BMW' at Model dropdown on Detail Servis
   Then a customer can see wording 'Tidak ada hasil yang ditemukan'

   @DAYTONA-722 @Tahun
   Scenario: As a customer, I can't see any suggestion if I search 2021 at Tahun dropdown
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill '2021' at Tahun dropdown on Detail Servis
   Then a customer can see wording 'Tidak ada hasil yang ditemukan'


   @DAYTONA-722 @Kategori
   Scenario: As a customer, I can't see any suggestion if I search 55.000 KM at Kategori Servis dropdown
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   And a customer try to access Booking Service Page
   And a customer try to fill fields 'AYLA' '2020' 'QA123DSO'
   And a customer try to fill '55.000KM' at Kategori Servis dropdown on Detail Servis
   Then a customer can see wording 'Tidak ada hasil yang ditemukan'