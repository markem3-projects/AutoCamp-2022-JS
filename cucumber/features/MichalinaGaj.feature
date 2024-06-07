Feature: MTS Testing

  Scenario Outline: When I change language, it changes correctly.

    Given I am on the restaurant page
    When I click on flag icon and select different language
    Then I see that language changed correctly

  Scenario Outline: When I chose rice filter, it is applied

    Given I am on the restaurant page
    When I click on menu and select "rice" filter
    Then I see only dishes with rice 

  Scenario Outline: When I book a table, I should see a success alert

    Given I am on the bookTable page
    When I input <name>; <email>; <number of guests>
    Then I book a table successfully

    Examples:
        | name  | email         | number of guests |
        | abc   | abc@abc.com   |3                 |   