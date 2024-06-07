Feature: Test the functionality of the website My Thai Star

    https://github.com/devonfw/my-thai-star

Scenario: Verification of case being logged in and refreshing the page 
    Given I am at the menu page to register
    When  Register
    And   sign-up
    And   refresh the website
    Then  I should be still logged in

Scenario: Applying "noodle" filter on menu 
    Given I am at the menu page
    When  I apply the "noodle" filter
    Then  I should see one noodle position

Scenario: Placing an order with not existing "BookingID"
    Given I am at the menu page (wait for menu)
    When  I click position on menu and give nonexistent BookingID
    Then  I should get an error message