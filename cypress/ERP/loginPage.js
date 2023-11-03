describe('Login page Suit', function(){
  it('TC-01: Verify that user is getting alert message when user name & password is incorrect',function(){
      cy.visit("https://erp.bjitgroup.com/");
      cy.get('#login').type("md.abcd@bjitgroup.com")
      cy.get('#password').type("1234")
      cy.get('.btn.btn-primary').click()
      cy.get('.alert.alert-danger').contains(' Wrong login/password ')

      
      /*cy.wait(2000)
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



})