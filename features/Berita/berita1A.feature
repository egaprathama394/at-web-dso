Feature: Berita 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-413 @Article
   Scenario: As a guest, I can see News & Article page through Home page
   When a guest try to access News & Article page through Home page
   Then a guest can see News and Article page

   @DAYTONA-413 @Fav
   Scenario: As a guest, I can bookmark article on News & Article page
   When a guest login using email 'aci66v@gmail.com' and password 'baby134137'
   And a guest try to click MASUK
   When a guest try to access News & Article page through Home page
   Then a guest can bookmark articles on News & Article page

   @DAYTONA-413 @Read
   Scenario: As a guest, I can read article through News & Article page
   When a guest try to access News & Article page through Home page
   And a guest try to choose article through News & Article page
   Then a guest can read article