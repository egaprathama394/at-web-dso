Feature: Forgot Password Negative

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @DAYTONA-414 @page
   Scenario: As a guest, I can access Login page
   When a guest try to access Login page
   Then a guest can see Login page

   @DAYTONA-721  @forgotPassword @Negative
   Scenario: As a guest, I can using forgot password feature using email
   When a guest try to access Login page
   When a customer click Lupa kata sandi
   And a customer input email '222gmail.com'
   Then a customer can see validation Format email salah

     @DAYTONA-721  @forgotPassword @Negative
   Scenario: As a guest, I can using forgot password feature using email
   When a guest try to access Login page
   When a customer click Lupa kata sandi
   And a customer input email ''
   Then a customer can see validation Field ini diperlukan