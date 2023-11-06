// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/*Cypress.Commands.add('verifyTextInDocument', (textToVerify) => {
    cy.document().then((doc) => {
      const entireTextContent = doc.body.innerText;
      const textIsVisible = entireTextContent.includes(textToVerify);
  
      if (textIsVisible) {
        cy.log(`Text "${textToVerify}" is visible in the document.`);
      } else {
        cy.log(`Text "${textToVerify}" is not visible in the document.`);
      }
  
      expect(textIsVisible).to.be.true; // or use `.to.be.false` if you want to verify its absence
    });
  });*/
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })