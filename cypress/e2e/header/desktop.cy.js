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
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  describe('should have a logo', () => {
    it('that exists', () => {
      cy.get('[data-id="headerLogo"]').should('exist');
    });
  });

  describe('should have nav items', () => {
    it('that exist', () => {
      cy.get('[data-id="headerNavItem"]').should('exist');
    });

    it('that are multiple', () => {
      cy.get('[data-id="headerNavItem"]').should('exist');
      cy.get('[data-id="headerNavItem"]').should('have.length.greaterThan', 1);
    });

    describe('that redirect on click', () => {
      beforeEach(() => {
        cy.get('[data-id="headerNavItem"]').eq(3).click();
      });

      it('and change url', () => {
        cy.url().should('include', '#gallery');
      });

      it('and scroll', () => {
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
        cy.wait(9000);
        cy.get('[data-id="header"] button').first().click();
        cy.wait(9000);
        cy.url().should('include', '#form');
      });

      it('and scrolls', () => {
        cy.wait(9000);
        cy.get('[data-id="header"] button').first().click();
        cy.wait(9000);
        cy.get('[data-id="form"]').should('be.visible');
      });
    });
  });
});
