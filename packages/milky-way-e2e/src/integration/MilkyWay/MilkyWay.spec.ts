describe('milky-way: MilkyWay component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=milkyway--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MilkyWay!');
    });
});
