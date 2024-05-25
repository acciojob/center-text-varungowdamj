() => {
  cy.visit('path-to-your-html-file', { timeout: 10000 }); // Increase timeout to 10 seconds
  cy.get('center', { timeout: 10000 }).should('exist');
  cy.get('center h1', { timeout: 10000 }).should('have.length.greaterThan', 0);
}
