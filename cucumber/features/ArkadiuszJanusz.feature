Feature: To test the functionality of My Thai Star page

Scenario Outline: The one where user adds beef to order
    Given I am on my restaurant page
    When I add beef to my order
    Then Beef should appear in my order

Scenario Outline: The one where user adds meals to favourites
    Given I am on my restaurant page
    When I add and show my favourites meals
    Then It should show me favourite meals

Scenario Outline: The one where user sorts meals alphabetically
    Given I am on menu page
    When I sort meals alphabetically
    Then Meals should be sorted alphabetically