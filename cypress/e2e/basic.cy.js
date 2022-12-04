describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('May I Make You a S̵a̵n̵d̵w̵h̵i̵c̵h̵ Game?');
  });
});
