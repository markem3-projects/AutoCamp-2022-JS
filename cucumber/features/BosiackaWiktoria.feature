Feature: My thai Star 

    Scenario Outline: When i'm logged in and i refresh the page i'm still logged in

        Given When I'm on a home page
        When I log with <username> and <password>
        And I'll refresh the page
        Then I'm still logged in with <username>

        Examples:
        |username|password|
        |abb     |abb     |



    Scenario Outline: When I search favourites without being logged in nothin will show up

        Given When i'm on menu page 
        When I click on favourites
        Then Nothing will show up

    
    Scenario Outline: I can book a table

        Given I am on a book table page
        When I put <date>; <name>; <email>; <number of guests> in fields
        Then I booked a table 

        Examples:
        | date              | name  | email         | number of guests |
        |9/15/2022, 2:23 PM | Marta | xyz@gmail.com |4                 |    
