Feature: Login

  Background: Login
    Given User navigates to uniform website
    When User enters "admin" and "Admin@123"
    And User clicks on login button
    Then Dashboard is displayed

  @Marketing
  Scenario Outline: Verify Search Functionality with valid Campaign Name Value
    Given User navigates to marketing section
    When User enters valid "<Campaign Name>" in Campaign Name input box
    And Clicks on filter button
    Then Campaign Name along with all details should appear

    Examples: 
      | Campaign Name              |
      | aauxtolhbfcgvqydznysxhbbcr |

  @Marketing
  Scenario Outline: Verify Search Functionality with valid Tracking Code Value
    Given User navigates to marketing section
    When User enters valid "<Tracking Code>" in Tracking Code input box
    And Clicks on filter button
    Then Campaign Name along with all details should appear

    Examples: 
      | Tracking Code |
      | 62285b8c3788d |

  @Marketing
  Scenario Outline: Verify Search Functionality with valid Date Added Value
    Given User navigates to marketing section
    When User enters valid "<Date>" in Date Added input box
    And Clicks on filter button
    Then Campaign Name along with all details should appear

    Examples: 
      | Date       |
      | 2022-03-10 |

  @Marketing
  Scenario: Verify the add button functionality of Marketing section with valid inputs
    Given User navigates to marketing section
    When User clicks on add button icon
    And provides valid Campaign Name inside the add button popup
    And Clicks on save button
    Then the data must be added to marketing section list followed by sucess message

  @Marketing
  Scenario: Verify the delete button functionality of Marketing section with valid inputs
    Given User navigates to marketing section
    When user selects a random checkbox
    And Clicks on delete icon
    And Click Yes on the popup
    Then the data must be deleted and sucess message should appear

  @Marketing
  Scenario Outline: Verify the edit button functionality of Marketing section with valid inputs
    Given User navigates to marketing section
    When User clicks on the edit button of a random row
    And Enters valid "<Campaign Name>" and "<Tracking Code>"
    And Clicks on save button
    Then the row must be edited and added to database along with proper massage

    Examples: 
      | Campaign Name | Tracking Code |
      | Ibm Campaign  | qwerty123     |

  @Check
  Scenario: Verify the add button functionality of Gift Voucher themes section with valid inputs
    Given User navigates to Gift Voucher Themes Section
    When User clicks on add button icon
    And provides valid voucher theme name along with image
    And Clicks on save button
    Then the data must be added to gift voucher theme list followed by sucess message
    
  @Gift
  Scenario: Verify the delete button functionality of Gift Voucher Theme section 
  	Given User navigates to Gift Voucher Themes Section
		When user selects a random checkbox
		And Clicks on delete icon
    And Click Yes on the popup
    Then the data must be deleted and sucess message should appear
    
  @Check2
	Scenario: Verify the edit button functionality of Gift Voucher Theme section 
		Given User navigates to Gift Voucher Themes Section
		When User clicks on edit button of corresponding row
		And provides valid voucher theme name along with image
		And Clicks on save button
    Then the row must be edited and added to database along with proper massage
		
    