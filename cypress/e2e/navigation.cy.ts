describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link containing "About" text and click it
    cy.findByRole('link', { name: 'About' }).click();

    // The new url should include "/about"
    cy.url().should('include', '/about');

    // The new page should contain two "lorem ipsum" paragraphs
    cy.findAllByText('Lorem ipsum dolor sit amet', { exact: false }).should(
      'have.length',
      2
    );
  });
});
