class LoginPage{
    constructor(){
        this.PAGE_LOGO = "img[alt='company-branding']"
        this.UN_TEXTFIELD = "input[name='username']"
        this.PWD_TEXTFIELD = "input[name='password']"
        this.LOGIN_BTN = "//button[text()=' Login ']"
        this.USER_VIEW = "//img[@alt='profile picture']/parent::span"
        this.LOGOUT_BTN = "//ul[@role='menu']/li/a[text()='Logout']"
    }

    verifyRedirectToUrl(){
        cy.get(this.PAGE_LOGO).should('be.visible')
    }

    enterUsername(username){
        cy.get(this.UN_TEXTFIELD).should('be.visible').type(username)
    }

    enterPassword(password){
        cy.get(this.PWD_TEXTFIELD).should('be.visible').type(password)
    }

    clickOnLoginButton(){
        cy.xpath(this.LOGIN_BTN).should('be.visible').click()
    }

    verifySuccessfullogin(){
        cy.xpath(this.USER_VIEW).should('be.visible')
    }

    clickOnLogoutButton(){
        cy.xpath(this.USER_VIEW).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(this.LOGOUT_BTN).should('be.visible').click()
    }
}
module.exports = new LoginPage();