$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/demo.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Search Functionality with valid Campaign Name Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cCampaign Name\u003e\" in Campaign Name input box",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name"
      ]
    },
    {
      "cells": [
        "aauxtolhbfcgvqydznysxhbbcr"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search Functionality with valid Campaign Name Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"aauxtolhbfcgvqydznysxhbbcr\" in Campaign Name input box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_valid_in_Campaign_Name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.campaign_Name_along_with_all_details_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Search Functionality with valid Tracking Code Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cTracking Code\u003e\" in Tracking Code input box",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Tracking Code"
      ]
    },
    {
      "cells": [
        "62285b8c3788d"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search Functionality with valid Tracking Code Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"62285b8c3788d\" in Tracking Code input box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_valid_in_Tracking_Code_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.campaign_Name_along_with_all_details_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Search Functionality with valid Date Added Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cDate\u003e\" in Date Added input box",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Date"
      ]
    },
    {
      "cells": [
        "2022-03-10"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search Functionality with valid Date Added Value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"2022-03-10\" in Date Added input box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_valid_in_Date_Added_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Campaign Name along with all details should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.campaign_Name_along_with_all_details_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the add button functionality of Marketing section with valid inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on add button icon",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_add_button_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides valid Campaign Name inside the add button popup",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.provides_valid_Campaign_Name_inside_the_add_button_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the data must be added to marketing section list followed by sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_data_must_be_added_to_marketing_section_list_followed_by_sucess_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the delete button functionality of Marketing section with valid inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a random checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_selects_a_random_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_delete_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Yes on the popup",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_Yes_on_the_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the data must be deleted and sucess message should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_data_must_be_deleted_and_sucess_message_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the edit button functionality of Marketing section with valid inputs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the edit button of a random row",
  "keyword": "When "
});
formatter.step({
  "name": "Enters valid \"\u003cCampaign Name\u003e\" and \"\u003cTracking Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "the row must be edited and added to database along with proper massage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Campaign Name",
        "Tracking Code"
      ]
    },
    {
      "cells": [
        "Ibm Campaign",
        "qwerty123"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the edit button functionality of Marketing section with valid inputs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Marketing"
    }
  ]
});
formatter.step({
  "name": "User navigates to marketing section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_marketing_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the edit button of a random row",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_edit_button_of_a_random_row()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid \"Ibm Campaign\" and \"qwerty123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enters_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the row must be edited and added to database along with proper massage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_row_must_be_edited_and_added_to_database_along_with_proper_massage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the add button functionality of Gift Voucher themes section with valid inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Gift"
    }
  ]
});
formatter.step({
  "name": "User navigates to Gift Voucher Themes Section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Gift_Voucher_Themes_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on add button icon",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_add_button_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides valid voucher theme name and clicks on image icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.provides_valid_voucher_theme_name_and_clicks_on_image_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the two buttons edit and delete must appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_two_buttons_edit_and_delete_must_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the delete button functionality of Gift Voucher Theme section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Gift"
    }
  ]
});
formatter.step({
  "name": "User navigates to Gift Voucher Themes Section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Gift_Voucher_Themes_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a random checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_selects_a_random_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on delete icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.clicks_on_delete_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Yes on the popup",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_Yes_on_the_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the data must be deleted and sucess message should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_data_must_be_deleted_and_sucess_message_should_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to uniform website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_uniform_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the edit button functionality of Gift Voucher Theme section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Gift"
    }
  ]
});
formatter.step({
  "name": "User navigates to Gift Voucher Themes Section",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Gift_Voucher_Themes_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on edit button of corresponding row",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_edit_button_of_corresponding_row()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides valid voucher theme name and clicks on image icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.provides_valid_voucher_theme_name_and_clicks_on_image_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the two buttons edit and delete must appear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_two_buttons_edit_and_delete_must_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});