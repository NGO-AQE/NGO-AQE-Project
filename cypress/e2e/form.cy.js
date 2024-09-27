/// <reference types="cypress" />

import { FORMERRORMSGS } from '../support/constants';

describe('Form', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport(1920, 1080);
    cy.visit('/en');
    cy.wait(500);
  });

  it('input values should be sent in request', () => {
    const formValues = ['name', 'mail@mail.com', 'pl', true];

    cy.submitForm(formValues);

    cy.wait('@formSubmit').then(interception => {
      const { user_name, user_email, user_country } =
        interception.request.body.template_params;

      expect(user_name).to.equal(formValues[0]);
      expect(user_email).to.equal(formValues[1]);
      expect(user_country).to.equal(formValues[2]);
    });
  });

  it('response should be successful', () => {
    const formValues = ['name', 'mail@mail.com', 'pl', true];

    cy.submitForm(formValues);

    cy.wait('@formSubmit').then(interception => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it('should show warnings only for required inputs', () => {
    const formValues = ['', '', '', true];

    cy.submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes(FORMERRORMSGS.requiredField))
      .should('have.length', 2);
  });

  it('should show warning for email format', () => {
    const formValues = ['name', 'mail', 'pl', true];

    cy.submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes(FORMERRORMSGS.mailFormat))
      .should('have.length', 1);
  });

  it('should hide warnings on fixing fields', () => {
    let formValues = ['', '', '', true];
    let correctFormValues = ['Name', 'mail@mail.com', '', true];

    cy.submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes(FORMERRORMSGS.requiredField))
      .should('have.length', 2);

    cy.submitForm(correctFormValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes(FORMERRORMSGS.requiredField))
      .should('have.length', 0);
  });

  it('should show and close modal on submit', () => {
    const formValues = ['name', 'mail@mail.com', 'pl', true];

    cy.submitForm(formValues);

    cy.get('[data-id="modal"]').should('be.visible');
    cy.get('[data-id="modal-button"]').first().click();
    cy.get('[data-id="modal"]').should('not.exist');
  });
});
