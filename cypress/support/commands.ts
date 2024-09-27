/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//

Cypress.Commands.add('submitForm', formValues => {
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send').as(
    'formSubmit',
  );

  ['fullName', 'email', 'country'].forEach((fieldType, i) => {
    if (formValues[i] !== '') {
      cy.get(`[data-id="${fieldType}Input"]`).type(formValues[i] as string);
    }
  });

  if (formValues[3]) {
    cy.get(`[data-id="checkInput"]`).check();
  }

  cy.get('[data-id="form"] form').submit();
});
