/// <reference types="cypress" />

describe ('', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  it('should scroll to Contact Us section', () => {
    cy.get('[data-id="contactUsSection"]').scrollIntoView();
    cy.get('[data-id="contactUsSection"]').should('be.visible');
  });

  it('should all links be visible', () => {
    cy.get('[data-id="contactUsSection"]').scrollIntoView();
    cy.get('[data-id="contactUsEmail"]').should('be.visible');
    cy.get('[data-id="contactUsAddress"]').should('be.visible');
    cy.get('[data-id="contactUsNumber"]').should('be.visible');
  });

  it('should move user to google maps', () => {
    cy.get('[data-id="contactUsSection"]').scrollIntoView;
    cy
      .get('[data-id="contactUsAddress"]')
      .invoke("removeAttr", "target")
      .click();
  });
})