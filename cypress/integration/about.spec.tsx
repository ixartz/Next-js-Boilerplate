describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/about');

    // The new url should include "/about"
    cy.url().should('include', '/about');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page');
  });
});

export {};
