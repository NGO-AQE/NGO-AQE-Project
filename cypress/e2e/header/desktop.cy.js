/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Desktop header', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.wait(500);
  });

  it('has logo', () => {
    cy.get('[data-id="headerLogo"]').should('exist');
  });

  it('has nav items', () => {
    cy.get('[data-id="headerNavItem"]').should('have.length.greaterThan', 1);
  });

  it('has nav items that redirect', () => {
    cy.get('[data-id="headerNavItem"]').eq(3).contains('Gallery').click();
    cy.url().should('include', '#gallery');
    cy.get('[data-id="gallery"]').should('be.visible');
  });

  it('has button', () => {
    cy.get('[data-id="header"] button').first().should('exist');
  });

  it('has button that redirects', () => {
    cy.get('[data-id="header"] button').first().click();
    cy.url().should('include', '#form');
    cy.get('[data-id="form"]').should('be.visible');
  });

  it('has language selector', () => {
    cy.get('[data-id="headerSelect"]').first().should('exist');
  });

  it('has language selector that changes content on click', () => {
    cy.get('[data-id="header"] button a')
      .invoke('text')
      .then(initialText => {
        cy.get('[data-id="headerSelect"]').first().click();
        cy.get('[data-id="headerSelect"]').contains('Polish').click();
        cy.wait(500);
        cy.get('[data-id="header"] button a')
          .invoke('text')
          .then(newText => {
            expect(newText).not.to.equal(initialText);
          });
      });
  });
});
