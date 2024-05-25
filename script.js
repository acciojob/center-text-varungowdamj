//your JS code here. If required.
() => {
  cy.get('h1').should('have.length.greaterThan', 0);
  cy.get('center').should('have.length.greaterThan', 0);
}
