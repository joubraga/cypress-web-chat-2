import { FLOW, FLOW_QUESTION } from '../../utils';

describe('Devo conseguir acessar os fluxos ', () => {
  describe('Acessando fluxo EITAA', () => {
    it('Acessando fluxo', () => {
      cy.visit(`/${FLOW}`);
    });

    it('Roboto irá começar com o usuário', () => {
      cy.get('.card-message-robot')
        .find('.card-message-balloon')
        .find('div')
        .should('be.visible')
        .contains('bora la mano')
    });

    it('Deverá aparecer um carousel de imagens', () => {
      cy.get('.image-card-carousel')
        .should('be.visible')
    });
  
    it('Carousel deverá contem no mínimo 2 imagens', () => {
      cy.get('.image-card-carousel img')
        .eq(2)
        .should('be.visible');
    });
  
    it('Após o carousel de imagens deverá vir um texo', () => {
      cy.get('.card-message-robot')
        .eq(1)
        .find('.card-message-balloon')
        .find('div')
        .should('be.visible')
        .contains('vamos testar com este texto agora :D')
    });
  });
});