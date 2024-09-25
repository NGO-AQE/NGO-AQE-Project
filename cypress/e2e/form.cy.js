/// <reference types="cypress" />

function submitForm(formValues) {
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send').as(
    'formSubmit',
  );

  ['fullName', 'email', 'country'].forEach((fieldType, i) => {
    if (formValues[i] !== '') {
      cy.get(`[data-id="${fieldType}Input"]`).type(formValues[i]);
    }
  });

  if (formValues[3]) {
    cy.get(`[data-id="checkInput"]`).check();
  }

  cy.get('[data-id="form"] form').submit();
}

describe('Form', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport(1920, 1080);
    cy.visit('/en');
    cy.wait(1000);
  });

  it('input values should be sent in request', () => {
    const formValues = ['name', 'mail@mail.com', 'pl', true];

    submitForm(formValues);

    cy.wait('@formSubmit').then(interception => {
      const { user_name, user_email, user_country } =
        interception.request.body.template_params;

      expect(user_name).to.equal(formValues[0]);
      expect(user_email).to.equal(formValues[1]);
      expect(user_country).to.equal(formValues[2]);
    });
  });

  it('should show warnings only for required inputs', () => {
    const formValues = ['', '', '', true];

    submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes('This field is required'))
      .should('have.length', 2);
  });

  it('should show warning for email format', () => {
    const formValues = ['name', 'mail', 'pl', true];

    submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) =>
        el.innerText.includes('Entered value does not match email format'),
      )
      .should('have.length', 1);
  });

  it('should hide warnings on fixing fields', () => {
    let formValues = ['', '', '', true];

    submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes('This field is required'))
      .should('have.length', 2);

    formValues[0] = 'Name';
    formValues[1] = 'mail@mail.com';

    submitForm(formValues);

    cy.get('[data-id="form"] form > div > div')
      .filter((_, el) => el.innerText.includes('This field is required'))
      .should('have.length', 0);
  });

  it('should show and close modal on submit', () => {
    const formValues = ['name', 'mail@mail.com', 'pl', true];

    submitForm(formValues);

    cy.get('[data-id="modal"]').should('be.visible');
    cy.get('[data-id="modal"] img').first().click();
    cy.get('[data-id="modal"]').should('not.exist');
  });
});
