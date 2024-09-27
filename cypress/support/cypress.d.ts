declare namespace Cypress {
  interface Chainable {
    submitForm(
      formValues: [string, string, string, boolean],
    ): Chainable<Element>;
  }
}
