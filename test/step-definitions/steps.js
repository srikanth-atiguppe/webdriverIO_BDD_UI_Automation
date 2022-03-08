const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
//const loginPage = require('../pageobjects/login.page');

const pages = {
    home: HomePage
}

const assert = require('assert');
const expectchai = require('chai').expect
const { borrowTypeHome } = require('../pageobjects/home.page');

/*Given(/^I am on the home loan borrowing page calculator$/, () => {
	 browser.url('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
});

When(/^I enter deatils$/, () => {
	/*HomePage.applicationType.click()
	HomePage.numberOfDependents.setValue('2')
	HomePage.borrowTypeHome.click()
	HomePage.annualIncome.setValue('80000')
	HomePage.otherIncome.setValue('10000')
	HomePage.expenses.setValue('500')
	HomePage.homeLoans.setValue('0')
	HomePage.otherLoans.setValue('100')
	HomePage.otherCommitments.setValue('0')
	HomePage.creditLimit.setValue('10000')*/
/*});*/



/*When(/^I select "([^"]*)"$/, () => {
	console.log("h1");
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I select "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I enter "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});



Then(/^I click on how much I could borrow$/, () => {
	HomePage.calculateBorrow.click()
});*/





Given(/^I am on the home loan borrowing page calculator$/, () => {
	browser.url('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
});


When(/^I enter details$/, () => {
	browser.waitUntil(
		() => browser.execute(() => document.readyState === 'complete')),
		{ timeout: 5000,timeoutMsg: 'Page load exceeded 5sec'}
	  
});


When(/^I select application type "([^"]*)"$/, (type) => {
	HomePage.applicationType.click()
});

When(/^I enter number of dependents "([^"]*)"$/, (numofdependents) => {
	HomePage.numberOfDependents.click()
	HomePage.numberOfDependents.selectByVisibleText(numofdependents)
});

When(/^I select property type "([^"]*)"$/, (propertyType) => {
	HomePage.borrowTypeHome.click()
});

When(/^I enter annual income "([^"]*)"$/, (grossIncome) => {
	HomePage.annualIncome.setValue(grossIncome)
});

When(/^I enter other income "([^"]*)"$/, (other) => {
	HomePage.otherIncome.setValue(other)
});

When(/^I enter monthly living expense "([^"]*)"$/, (expense) => {
	HomePage.expenses.setValue(expense)
});

When(/^I enter monthly home loan repayment "([^"]*)"$/, (loanRepay) => {
	HomePage.homeLoans.setValue(loanRepay)
});

When(/^I enter other loan repayment "([^"]*)"$/, (otherLoanRepay) => {
	HomePage.otherLoans.setValue(otherLoanRepay)
});

When(/^I enter monthly commitments "([^"]*)"$/, (monthlyCommitment) => {
	HomePage.otherCommitments.setValue(monthlyCommitment)
});

When(/^I enter credit card limit "([^"]*)"$/, (creditCardLimit) => {
	HomePage.creditLimit.setValue(creditCardLimit)
	
});

Then(/^I click on how much I could borrow$/, () => {
	HomePage.calculateBorrow.click()
});


Then(/^I verify the estimated borrow amount "([^"]*)"$/, (borrowingEstimate) => {
	let borrowAmt = HomePage.estimatedBorrowAmt.getValue().replace(/[^0-9]/g,"").toString()
	expectchai(borrowAmt).to.equal(borrowingEstimate)
});


Then(/^I click on start over to clear all fields$/, () => {
	HomePage.startOver.click()
});


Then(/^I verify whether all the fields are cleared$/, () => {
	assert.equal(HomePage.annualIncome.getValue(),0)
	assert.equal(HomePage.otherIncome.getValue(),0)
	assert.equal(HomePage.expenses.getValue(),0)
	assert.equal(HomePage.creditLimit.getValue(),0)
});


Then(/^I verify whether a message is returned$/, () => {
	console.log(HomePage.borrowErrorMsg.getText())
	let expectedMsg = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
	expectchai(HomePage.borrowErrorMsg.getText()).to.equal(expectedMsg)
});
