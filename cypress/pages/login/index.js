import { elements as el } from './elements'


class Login {
    vistarPagina() {
        cy.visit('/')
        
    }

preencherCredenciaisValidas(){
    cy.get(el.fecharBanner).click()
    cy.get(el.iconeEntrar).click()
    cy.get(el.usuario).type(Cypress.env('credenciais_validas').email)
    cy.get(el.senha).type(Cypress.env('credenciais_validas').password)
    cy.get(el.botaoEntrar).click()
    cy.get(el.aceitarCookies).click()
    cy.wait(5000)   
    cy.get(el.usuarioLogado).contains ('Olá, Naiara')       
    
}
}

export default new Login()
