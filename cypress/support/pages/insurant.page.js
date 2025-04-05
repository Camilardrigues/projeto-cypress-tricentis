// Constantes que armazenam os seletores dos campos do formulário de dados do segurado (Insurant Data)
const FIRST_NAME = '#firstname'
const LAST_NAME = '#lastname'
const DATA_OF_BIRTH = '#birthdate'
const GENDER = '#gendermale'
const STREET_ADDRESS = '#streetaddress'
const COUNTRY = '#country'
const ZIP_CODE = '#zipcode'
const CITY = '#city'
const OCCUPATION = '#occupation'
const HOBBIES = '#speeding'
const WEBSITE = '#website'
const PICTURE = "#picture"
const BTN_OPEN = "#picturecontainer"
const BTN_NEXT_INSURANCE = "#nextenterproductdata"


//Comando customizado que preenche o formulário de dados do segurado (Insurant Data)
Cypress.Commands.add('fillInsurantData', () => {
  cy.get(FIRST_NAME).type('Camila')
  cy.get(LAST_NAME).type('Pessoa')
  cy.get(DATA_OF_BIRTH).type('03/14/2002')
  cy.get(GENDER).click({force:true})
  cy.get(STREET_ADDRESS).type('Av. Alfredo Lisboa ')
  cy.get(COUNTRY).select('Brazil')
  cy.get(ZIP_CODE).type('50030150')
  cy.get(CITY).type('Recife')
  cy.get(OCCUPATION).select('Employee')
  cy.get(HOBBIES).click({force:true})
  cy.get(WEBSITE).type('https://meusite.com')
  cy.get(BTN_NEXT_INSURANCE).click()
  cy.get(BTN_OPEN).selectFile('1741646926804.jpg', { force: true})
  cy.get('.error').should('not.be.visible')
  })

  Cypress.Commands.add('validarPaginaInsurant', () => {
    cy.get(".idealsteps-step-active, a[name = 'Enter Insurant Data']").should("be.visible")   
    cy.log('Aba de dados do segurador')
  });
  