import { elements as el } from './elements'

class Marketplace {

    addProdutoTenda(){
        //abrir página de bebidas
        //cy.visit('/bebidas')
        cy.scrollTo('top');
 

        cy.wait(1000)
            cy.xpath(el.menuDepartamento)
            .realHover();
            cy.wait(500);
          
         
 cy.scrollTo('top');

        cy.xpath(el.menuMarcaPropria)
 
        .realHover();
        cy.wait(500);

        cy.xpath(el.itemSubMenuBebidas)        
      
         .click({force:true});

        cy.get(el.descProduto).first().click();
        cy.wait(5000);        
        cy.get(el.addProdutoTendaButton).click();        
        cy.contains(el.verCarrinhoButton, 'Ver carrinho').click();
        cy.wait(5000);
        cy.get(el.tipoProdutoSeller).should('contain', 'Tenda')
        cy.get(el.addMaisprodutos).click();
        cy.wait(1000);
         cy.scrollTo('top');
        
    }
        addProdutoSeller(){
        //cy.visit('https://marketplace-alpha.tendaatacado.com.br/produtos-seller')
        cy.xpath(el.menuDepartamento)
            .realHover();
            cy.wait(500);

            cy.scrollTo('top');

        cy.xpath(el.menuSeller) 
        .realHover();
        cy.wait(500);

        

        cy.xpath(el.itemSubmenuProdutoSeller)        
      
         .click({force:true});

            cy.get(el.descProduto).first().click();
        cy.wait(5000);
        cy.get(el.addProdutoSellerButton).should('be.visible').click();
        cy.contains(el.verCarrinhoButton, 'Ver carrinho').click();
        cy.wait(5000);
        cy.get(el.tipoProdutoSeller).should('contain', 'Benedito ME Fantasia')
        
        
    }
        removerProdutoCarrinho(){
        
                
            }

    }

export default new Marketplace()
