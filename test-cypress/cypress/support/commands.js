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
//
// -- This is a parent command --
 Cypress.Commands.add("login", () => {
   cy.visit('/index.html')
   cy.viewport(1024, 768)
   cy.title().should('include', 'Formulário Automação')
   })

  // Cypress.Commands.add('login', (email, password) => {
  //  .visit('/login')
  //  .get('#email_input').type(email)
  //  .get('#password_input').type(password)
  //  .get('button.submit').click()
  // });
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
