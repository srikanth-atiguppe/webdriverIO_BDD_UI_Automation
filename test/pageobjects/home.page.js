

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */

    get borrowTitle(){
        return $("//span[text()='How much could I borrow?']")
    }
    get applicationType() {
        return $('#application_type_single');
    }

    get numberOfDependents() {
        return $('select[title ="Number of dependants"]');
    }

    get borrowTypeHome() {
        return $('#borrow_type_home');
    }

    get annualIncome(){
        return $('//*[text()[contains(.,"Your annual income (before tax)")]]/../div/./input')
    }

    get otherIncome(){
        return $('//*[text()[contains(.,"Your annual other income (optional)")]]/../div/./input')
    }

    get expenses(){
        return $('#expenses')
    }

    get homeLoans(){
        return $('#homeloans')
    }

    get otherLoans(){
        return $('#otherloans')
    }
    get otherCommitments(){
        return $('//*[text()[contains(.,"Other monthly commitments")]]/../div/./input')
    }

    get creditLimit(){
        return $('#credit')
    }

    get calculateBorrow(){
        return $('#btnBorrowCalculater')
    }

    get estimatedBorrowAmt(){
        return $('#borrowResultTextAmount')
    }

    get startOver(){
        return $("div[class='result__restart'] button")
    }

    get borrowErrorMsg(){

        return $("div[class='borrow__error__text']")
    }
    
    
}

module.exports = new HomePage();
