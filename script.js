() => {
  cy.visit('path-to-your-html-file'); // Ensure you have the correct path to your HTML file
  cy.get('center').should('have.length.greaterThan', 0);
  cy.get('h1').should('have.length.greaterThan', 0);
}
