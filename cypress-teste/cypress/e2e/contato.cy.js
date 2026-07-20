beforeEach(() => {
  cy.visit('index.html')
});

describe('funcionalidade: contato', () => {
  it.only('deve preencher formulario com sucesso', () => {
  cy.get('[name="name"]').type("leo")
  })
})