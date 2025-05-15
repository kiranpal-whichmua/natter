Feature: Video Call Core Functionality

  Background: Navigate to the Agora Video Call homepage
    Given I visit the "Agora Video Call" homepage

  Scenario: User joins, leaves and rejoins a video call successfully
    And I enter the "appId"
    And I enter the "token"
    And I enter the "channel"
    When I click on the "Join" button
    Then the "Join" button should be disabled
    And I click on the "Leave" button
    And the "Leave" button should be disabled
    And I click on the "Join" button
    And the "Join" button should be disabled
    # can't see the actual video player

  Scenario: User can change the video and audio settings
    When I click on the "ADVANCED SETTINGS" button
    Then I select from a list of "Mics"
    And I select from a list of "Profiles"

  Scenario: User attempts to join a video call with no channel
    When I click on the "Join" button
    Then the "Leave" button should be disabled
    # can't seem to assert the error message