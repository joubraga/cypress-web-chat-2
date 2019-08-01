import { FLOW, FLOW_QUESTION } from '../../utils';

describe('Devo conseguir acessar os fluxos ', () => {
  describe('Acessando fluxo EITAA', () => {
    it('Acessando fluxo', () => {
      cy.visit(`/${FLOW}`);
    });

    it('Robo irá começar com o usuário', () => {
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

describe('Acessando fluxo teste', () => {
  it('Acessando fluxo', () => {
    cy.visit(`/${FLOW_QUESTION}`);
  });

  it('Robo irá começar com o usuário', () => {
    cy.get('.card-message-robot')
      .find('.card-message-balloon')
      .find('div')
      .should('be.visible')
      .contains('asdasdasdad')
  });

  it('Deverá aparecer a mensagem com o menu', () => {
    cy.get('.card-message-robot')
      .eq(1)
      .find('.card-message-balloon')
      .find('div')
      .should('be.visible')
      .contains('1 - sim')
      .contains('2 - nao');
  });

  it('Deve ser possível escolher umas das opções', () => {
    cy.get('.card-buttons-item')
      .eq(0)
      .should('be.visible')
      .click()
    
    cy.wait(2000);
  });

  it('Deverá aparecer a resposta do robo', () => {
    cy.get('.card-message-robot')
      .find('.card-message-balloon')
      .find('div')
      .should('be.visible')
      .contains('sabia que ja tinha dado a bunda');
  });

  it('Deve ser possível escolher umas das opções', () => {
    cy.get('.card-buttons-item')
      .eq(1)
      .should('be.visible')
      .click()
    
    cy.wait(2000);
  });

  it('Deverá aparecer a resposta do robo', () => {
    cy.get('.card-message-robot')
      .find('.card-message-balloon')
      .find('div')
      .should('be.visible')
      .contains('pode falar a verdade vc ja deu a bunda sim kkkkk');
  });
});