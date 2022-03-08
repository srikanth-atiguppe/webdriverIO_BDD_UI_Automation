
Feature: ANZ Home Loan Calculator
  Scenario Outline: As an user, I can check my estimated borrowing power

    Given I am on the home loan borrowing page calculator
    When I enter details
    And  I select application type "<Application Type>" 
    And  I enter number of dependents "<No of dependents>" 
    And  I select property type "<Property to buy>"
    And I enter annual income "<Annual Income>"
    And I enter other income "<Other Income>"
    And I enter monthly living expense "<Living Expenses>"
    And I enter monthly home loan repayment "<Home loan repay>"
    And I enter other loan repayment "<other loan repay>"
    And I enter monthly commitments "<monthly commitments>"
    And I enter credit card limit "<creditlimit>"
    Then I click on how much I could borrow
    And I verify the estimated borrow amount "<borrowingestimate>"

    Examples:
      | Application Type | No of dependents| Property to buy | Annual Income | Other Income | Living Expenses | Home loan repay | other loan repay |monthly commitments| creditlimit | borrowingestimate |
      | single           | 0               | Home to live in |  80000        |  10000       |    500          |      0          |    100           |        0          |    10000    |    482000        |

Scenario Outline: As an user, I can enter new values on How much could I borrow? page after calculating the borrowing power by clicking start over

    Given I am on the home loan borrowing page calculator
    When I enter details
    And  I select application type "<Application Type>" 
    And  I enter number of dependents "<No of dependents>" 
    And  I select property type "<Property to buy>"
    And I enter annual income "<Annual Income>"
    And I enter other income "<Other Income>"
    And I enter monthly living expense "<Living Expenses>"
    And I enter monthly home loan repayment "<Home loan repay>"
    And I enter other loan repayment "<other loan repay>"
    And I enter monthly commitments "<monthly commitments>"
    And I enter credit card limit "<creditlimit>"
    Then I click on how much I could borrow
    And I click on start over to clear all fields
    And I verify whether all the fields are cleared

    Examples:
      | Application Type | No of dependents| Property to buy | Annual Income | Other Income | Living Expenses | Home loan repay | other loan repay |monthly commitments| creditlimit | 
      | single           | 1               | Home to live in |  80000        |  10000       |    500          |      0          |    100           |        0          |    10000    |


Scenario Outline: As an user, I enter only living expenses as 1 and calculator returns a message 

    Given I am on the home loan borrowing page calculator
    When I enter details
    And  I select application type "<Application Type>" 
    And  I enter number of dependents "<No of dependents>" 
    And  I select property type "<Property to buy>"
    And I enter annual income "<Annual Income>"
    And I enter other income "<Other Income>"
    And I enter monthly living expense "<Living Expenses>"
    And I enter monthly home loan repayment "<Home loan repay>"
    And I enter other loan repayment "<other loan repay>"
    And I enter monthly commitments "<monthly commitments>"
    And I enter credit card limit "<creditlimit>"
    Then I click on how much I could borrow
    And I verify whether a message is returned

    Examples:
      | Application Type | No of dependents| Property to buy | Annual Income | Other Income | Living Expenses | Home loan repay | other loan repay |monthly commitments| creditlimit | 
      | single           | 0               | Home to live in |  0            |  0           |    1            |      0          |     0            |        0          |    0        | 