import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa o portal Tricentis', () => {
  cy.visit('/')
})

And('clico no botão Automobile', () => {
  cy.clickBtnAutomobile()
})

And('valido o acesso à página Automobile', () => {
  cy.validarAutomobile()
  cy.validarPaginaVehicle() //Valida página do veículo
})

When('preenche corretamente os dados do veículo', () => {
  cy.fillVehicleData()
  cy.validarPaginaInsurant() //Valida página do segurado
})

And('preenche corretamente os dados do segurado', () => {
  cy.fillInsurantData()
  cy.validarPaginaProduct() //Valida página do produto
})

And('preenche corretamente os dados do produto', () => {
  cy.fillProductData()
  cy.validarPaginaPrice() //Valida página do preço
})

And('seleciona uma opção de preço', () => {
  cy.selectPriceOption()
  cy.validarPaginaSendQuote() //Valida página final de envio
})

And('preenche os dados finais para envio com e-mail vazio', () => {
  cy.get('#email').clear() // Campo vazio
  cy.get('#phone').type('8199999999')
  cy.get('#username').type('UsuarioTeste')
  cy.get('#password').type('Senha123!')
  cy.get('#confirmpassword').type('Senha123!')
  cy.get('#Comments').type('Tentando enviar sem e-mail')
  cy.get('#sendemail').click()
})

Then('o sistema deve exibir uma mensagem de erro', () => {
  //Valida que o campo está marcado como inválido
  cy.get('#email').should('exist')
})