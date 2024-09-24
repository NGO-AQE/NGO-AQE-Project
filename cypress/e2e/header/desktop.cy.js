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
    cy.wait(1000);
  });

  describe('should have a logo', () => {
    it('that exists', () => {
      cy.get('[data-id="headerLogo"]').should('exist');
    });
  });

  describe('should have multiple nav items', () => {
    it('that exist', () => {
      cy.get('[data-id="headerNavItem"]').should('have.length.greaterThan', 1);
    });

    describe('that redirect on click', () => {
      it('and change url', () => {
        cy.get('[data-id="headerNavItem"]').eq(3).contains('Gallery').click();
        cy.url().should('include', '#gallery');
      });

      it('and scroll', () => {
        cy.get('[data-id="headerNavItem"]').eq(3).contains('Gallery').click();
        cy.get('[data-id="gallery"]').should('be.visible');
      });
    });
  });

  describe('should have button', () => {
    it('that exists', () => {
      cy.get('[data-id="header"] button').first().should('exist');
    });

    describe('that redirects on click', () => {
      it('and changes url', () => {
        cy.get('[data-id="header"] button').first().click();
        cy.url().should('include', '#form');
      });

      it('and scrolls', () => {
        cy.get('[data-id="header"] button').first().should('exist');
        cy.get('[data-id="header"] button').first().click();
        cy.get('[data-id="form"]').should('be.visible');
      });
    });
  });

  describe('should have button', () => {
    it('that exists', () => {
      cy.get('[data-id="header"] button').first().should('exist');
    });

    describe('that redirects on click', () => {
      it('and changes url', () => {
        cy.get('[data-id="header"] button').first().click();
        cy.url().should('include', '#form');
      });

      it('and scrolls', () => {
        cy.get('[data-id="header"] button').first().should('exist');
        cy.get('[data-id="header"] button').first().click();
        cy.get('[data-id="form"]').should('be.visible');
      });
    });
  });

  describe('should have options', () => {
    it('that exist', () => {
      cy.get('[data-id="headerSelect"]').first().should('exist');
    });

    it('that change the content text', () => {
      cy.get('[data-id="header"] button a')
        .invoke('text')
        .then(initialText => {
          cy.get('[data-id="headerSelect"]').first().click();
          cy.get('[data-id="headerSelect"]')
            .contains('Polish')
            .should('exist')
            .click();
          cy.wait(1000);

          cy.get('[data-id="header"] button a')
            .invoke('text')
            .then(newText => {
              expect(newText).not.to.equal(initialText);
            });
        });
    });
  });
});
