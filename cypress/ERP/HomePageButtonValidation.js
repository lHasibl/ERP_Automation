///<reference types="Cypress" />

describe('HomePage Button Validation', function () {
  let data;
  before(function () {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function (fdata) {
      data = fdata
    })
  })
 
  /*it('TC-01: Verify that user is getting logged out when clicking on log out button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.oe_topbar_name').click()
    cy.get('a[data-menu ="logout"]').click()
    cy.url().should('eq', 'https://erp.bjitgroup.com/web/login')

  })
  it('TC-02: Verify that user is navigated to the preference page when clicking on Preferences button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.oe_topbar_name').click()
    cy.get('a[data-menu ="settings"]').click()
    cy.get('span[name="name"]').contains('Md. Hasibuzzaman')
    //cy.url().should('eq', 'https://erp.bjitgroup.com/web/login')

  })*/
  it('TC-03: Verify that conversation drop down menu appears when clicking on conversion button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.fa.fa-comments').click()
    cy.get('.o_mail_navbar_dropdown_top').click().contains('avcd')
    //cy.get('.o_mail_navbar_dropdown_top > div > .active').should('have.value','ALL')
    //cy.get('span[name="name"]').contains('Md. Hasibuzzaman')
    //cy.url().should('eq', 'https://erp.bjitgroup.com/web/login')

  })
  /*it('TC-05: Verify that user is getting logged in successfully when user name correct & password is correct', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.o_thread_title').should('have.text', 'Congratulations, your inbox is empty')
    cy.get('.oe_topbar_name').click()
    cy.get('a[data-menu ="logout"]').click()
  })*/


})