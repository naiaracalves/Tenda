import { elements as el } from './elements'

class Marketplace {

    addProdutoTenda(){
        //abrir página de bebidas
        cy.visit('/bebidas')
        cy.get(el.descProduto).first().click();
        cy.wait(5000);        
        cy.get(el.addProdutoTendaButton).click();        
        cy.contains(el.verCarrinhoButton, 'Ver carrinho').click();
        cy.wait(5000);
        cy.get(el.tipoProdutoSeller).should('contain', 'Tenda')
        
    }
        addProdutoSeller(){
        cy.visit('https://marketplace-alpha.tendaatacado.com.br/produtos-seller')
        cy.get(el.descProduto).first().click();
        cy.wait(5000);
        cy.get(el.addProdutoSellerButton).click();
        cy.contains(el.verCarrinhoButton, 'Ver carrinho').click();
        cy.wait(5000);
        cy.get(el.tipoProdutoSeller).should('contain', 'Benedito ME Fantasia')
        
        
    }
        removerProdutoCarrinho(){
        
                
            }

    }

export default new Marketplace()
