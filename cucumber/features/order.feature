Feature: To test the functionality of the menu page in My Thai Star

Scenario Outline: The one where user adds items to the cart
      Given I am on the menu page
      When I click ADD TO ORDER button
      Then I should see a pop up menu with an item added to the cart

Scenario Outline: The one where user sorts items by Likes
      Given I am on the menu page
      When I click the SORT BY button, pick LIKES, click APPLY FILTERS button
      Then I should see the menu page with items sorted by Likes

Scenario Outline: The one where user sets two factor authentication
      Given I am on the home page and log in as user0
      When I click Set up two factor authentication
      Then I should see a QR code