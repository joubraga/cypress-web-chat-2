describe('Smoak Test', () => {
  it('Devo conseguir acessar a url do WebChat 2.0', () =>{
    cy.visit();
  });

  describe('Ao carregar a tela', () => {
    it('Deverá aparecer no cabeçalho o título do WebChat', () => {
      cy.get('.header-title')
        .should('be.visible')
        .contains('Atendimento - WebChat');
    });

    it('Deverá aparecer o botão de Full Screen', () => {
      cy.get('.content-header-image')
        .should('be.visible');
    });

    it.only('Deverá ser possível deixar em Full Screen', () => {
      cy.visit('/');

      cy.wait(2000);

      cy.get('.content-header-image')
        .click({ force: true });
    });

    it('Deverá ser possível tirar de Full Screen', () => {
      cy.get('.content-header-image')
        .click();
      
        cy.wait(1300);
    });

    it('Deve aparecer a logo da New Way', () => {
      cy.get('.company-logo')
        .find('img')
        .should('be.visible');

      cy.wait(1000);
    });
    
    it('Deve conter o título com o nome da New Way', () => {
      cy.get('.company-info')
        .find('h2')
        .should('be.visible')
        .contains('New Way');

      cy.wait(1000);
    });

    it('Deve conter o sub título com o nome da New Way', () => {
      cy.get('.company-info')
        .find('h3')
        .should('be.visible')
        .contains('WebChat 2.0 da New Way - Chatbots team rocks!');

      cy.wait(1000);
    });

    describe('Deverá aparecer o campo de mesagem', () => {
      it('Devo conseguir clicar no campo de mensagem', () => {
        cy.get('.input-message')
          .should('be.visible')
          .click();
      });

      it('Enquanto não digitar um texto, botao de enviar estará desabilitado', () => {
        cy.get('.sendMessage')
          .should('be.visible')
          .should('be.disabled');
      });

      it('Quando digitar uma mensagem. botao de enviar estará habilitado', () => {
        cy.get('.input-message')
          .click()
          .type('Insirindo mensagme de teste');
  
        cy.get('.sendMessage')
          .click();
      });

      it('Ao enviar a mensagem deverá aparecer a minha mensagem que eu digitei',  () => {
        cy.get('.card-message-user')
          .find('.card-message-balloon')
          .find('div')
          .should('be.visible')
          .contains('Insirindo mensagme de teste');
      });

      it('Ao enviar a mensagem deverá aparecer o componente de Typing', () => {
        cy.get('.typing')
          .should('be.visible');
        
        cy.wait(2000);
      });      

      it('Deverá aparecer a imagem da empresa e a mesnagem do robo', () => {
        cy.get('.company-logo-chat')
          .should('be.visible');

        cy.get('.card-message-robot')
          .find('.card-message-balloon')
          .find('div')
          .should('be.visible')
          .contains('Sorry, your connection has been lost, please open another preview.')
      });
      
    });
  });
});