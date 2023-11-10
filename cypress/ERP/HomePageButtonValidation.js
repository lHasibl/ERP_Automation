///<reference types="Cypress" />
import '../../node_modules/cypress-xpath'
describe('HomePage Button Validation', function () {
  let data;
  before(function () {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function (fdata) {
      data = fdata
    })
  })

  it('TC-01: Verify that user is getting logged out when clicking on log out button', function () {
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

  })
  it('TC-03: Verify that conversation drop down menu appears when clicking on conversion button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.fa.fa-comments').click()
    cy.get('.o_mail_navbar_dropdown_top').click().contains('All')

  })
  it('TC-04: Verify that conversation drop down menu appears when clicking on conversion button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.fa.fa-comments').click()
    cy.get('.o_mail_navbar_dropdown_top').click().contains('All')

  })
  it('TC-05: Verify that user navigate to the discussion page when clicking on Discuss button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    //cy.xpath("//span[@class='title'][normalize-space()='Discuss']").click()
    cy.get(':nth-child(1) > .nav-link > .title').click()
    cy.get('.breadcrumb').contains('Inbox')
  })
  it('TC-06: Verify that user navigate to the daily Report page when clicking on Daily Report button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    //cy.xpath("//span[@class='title'][normalize-space()='Discuss']").click()
    cy.get(':nth-child(2) > .nav-link > .title').click()
    cy.get('.breadcrumb>.active').contains('Daily Report')
  })
  it('TC-07: Verify that user navigate to the Calendar page when clicking on Calendar button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    //cy.xpath("//span[@class='title'][normalize-space()='Discuss']").click()
    cy.get(':nth-child(3) > .nav-link > .title').click()
    cy.get('.breadcrumb>.active').contains('Meetings')
  })
  it('TC-08: Verify that user navigate to the Contact page when clicking on Contact button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    //cy.xpath("//span[@class='title'][normalize-space()='Discuss']").click()
    cy.get(':nth-child(4) > .nav-link > .title').click()
    cy.xpath("//strong[@class='o_kanban_record_title oe_partner_heading']//span[contains(text(),'Md. Hasibuzzaman')]").contains('Md. Hasibuzzaman')
  })
  it('TC-09: Verify that user navigate to the Payroll page when clicking on Payroll button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get(':nth-child(5) > .nav-link > .title').click()
    cy.get('.img.img-responsive').should('be.visible')

  })
  it('TC-10: Verify that user navigate to the Project page when clicking on Project button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Project').click()
    cy.get('.breadcrumb>.active').contains('Projects')

  })
  it('TC-11: Verify that user navigate to the Employee Dashboard page when clicking on Employee button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Employees').click()
    cy.get('.o_horizontal_separator.custom-bread-crumb').contains('Employee Dashboard')
  })
  it('TC-12: Verify that user navigate to the Attendance page when clicking on Attendances button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Attendances').click()
    cy.get('.breadcrumb>.active').contains('Attendances')
  })
  it('TC-13: Verify that user navigate to the Leave page when clicking on Leaves button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Leaves').click()
    cy.get('.breadcrumb>.active').contains('Leaves Request')
  })
  it('TC-14: Verify that user navigate to the Advance Salary page when clicking on Advance Salary button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Advance Salary').click()
    cy.get('.breadcrumb>.active').contains('Advanced Salary Requests')
  })
  it('TC-15: Verify that user navigate to the Intranet home page when clicking on Intranet button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Intranet').click()
    cy.xpath("//h3[normalize-space()='Home']").contains('Home')
  })
  it('TC-16: Verify that user navigate to the Medical Benefits page when clicking on Medical Benefits button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Medical Benefits').click()
    cy.get('.breadcrumb>.active').contains('Medical Benefits Requests')
  })
  it('TC-17: Verify that user navigate to the Provident Fund page when clicking on Provident Fund button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Provident Fund').click()
    cy.get('.breadcrumb>.active').contains('Employee Monthly PF')
  })
  it('TC-18: Verify that user navigate to the Meal Management page when clicking on Meal Management button', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Meal Management').click()
    cy.get('.breadcrumb>.active').contains('My Orders')
  })
  it('TC-19: Verify that user navigate to the Asset Management page when clicking on Asset Managementbutton', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('ul#sidebar').find('li').contains('Asset Management').click()
    cy.get('.breadcrumb>.active').contains('Assets')
  })

})