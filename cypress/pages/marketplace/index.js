import { elements as el } from './elements'

class Marketplace {

    addProdutos(){
        //abrir página de bebidas
        cy.visit('/bebidas')
        cy.get(el.descProduto).first().click();
        cy.wait(5000)
        cy.get(el.addButton).click();             
        
    }
    }


export default new Marketplace()