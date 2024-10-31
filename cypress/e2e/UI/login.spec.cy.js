const LOGINPAGE = require('../Pages/LoginPage');

describe('Login Spec', () => {
 
  it('Validate user login', () => {
    let UN = 'Admin'
    let PWD = 'admin123'
    cy.navigateToUrl()
    LOGINPAGE.verifyRedirectToUrl()
    LOGINPAGE.enterUsername(UN)
    LOGINPAGE.enterPassword(PWD)
    LOGINPAGE.clickOnLoginButton()
    LOGINPAGE.verifySuccessfullogin()
    LOGINPAGE.clickOnLogoutButton()
  })

  it('Validate user login-Negative', () => {
    let PWD = 'admin123'
    cy.navigateToUrl()
    LOGINPAGE.verifyRedirectToUrl()
    LOGINPAGE.enterUsername(UN)
    LOGINPAGE.enterPassword(PWD)
    LOGINPAGE.clickOnLoginButton()
    LOGINPAGE.verifySuccessfullogin()
    LOGINPAGE.clickOnLogoutButton()
  })

  it('Negative validation', () => {
    expect(true).to.equal(false)
  })

  it('positive validation', () => {
    expect(true).to.equal(true)
  })
})