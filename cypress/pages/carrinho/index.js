import { elements as el } from './elements';

class Remocao {
  removerProdutoCarrinho(nomeProduto) {
    cy.get(el.checkboxProduto(nomeProduto)).check();
    cy.get(el.apagarButton).first().click();
    cy.wait(5000)
    cy.contains(el.confirmarButton, 'Continuar').click();
    cy.wait(5000);
    cy.get(el.tipoProdutoSeller).should('not.contain', nomeProduto);
  }
}

export default new Remocao();