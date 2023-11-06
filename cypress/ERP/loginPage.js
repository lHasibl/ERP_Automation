///<reference types="Cypress" />

describe('Login page Suit', function () {
  let data;
  before(function () {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function (fdata) {
      data = fdata
    })
  })
  it('TC-01: Verify that user is getting alert message when user name & password is incorrect', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type("md.abcd@bjitgroup.com")
    cy.get('#password').type("1234")
    cy.get('.btn.btn-primary').click()
    cy.get('.alert.alert-danger').contains(' Wrong login/password ')


    /*
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    console.log('Hasib ')
    //cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
    //cy.get(':nth-child(3) > .product-action > button').click()

    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textveg= $el.find('h4.product-name').text()
        if (textveg.includes('Cashews')) {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).find('button').click()
          
        }
      })

      cy.get('.brand').then (function(logo){
        cy.log(logo.text())
      })
      cy.get('.brand').should('have.text','GREENKART')*/



  })
  it('TC-02: Verify that user is getting alert message when user name correct & password is incorrect', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type("md.hasibuzzama@bjitgroup.com")
    cy.get('#password').type("1234")
    cy.get('.btn.btn-primary').click()
    cy.get('.alert.alert-danger').contains(' Wrong login/password ')
  })
  it('TC-03: Verify that user is getting alert message when user name incorrect & password is correct', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type("md.asd@bjitgroup.com")
    cy.get('#password').type("84191105H@5ib")
    cy.get('.btn.btn-primary').click()
    cy.get('.alert.alert-danger').contains(' Wrong login/password ')
  })
  it('TC-04: Verify that user is getting alert message when user name & password is empty', function () {
    cy.visit("https://erp.bjitgroup.com/")
    cy.get('.btn.btn-primary').click()
    cy.wait(3000)
    cy.get('input[type ="hidden"]').contains('Please fill in this field.')

  })
  it('TC-05: Verify that user is getting logged in successfully when user name correct & password is correct', function () {
    cy.visit(Cypress.env('url'))
    cy.get('#login').type(data.username)
    cy.get('#password').type(data.password)
    cy.get('.btn.btn-primary').click()
    cy.get('.o_thread_title').should('have.text', 'Congratulations, your inbox is empty')
    cy.get('.oe_topbar_name').click()
    cy.get('a[data-menu ="logout"]').click()
  })


})