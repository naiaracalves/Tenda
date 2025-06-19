import Login from '../pages/login'
import Marketplace from '../pages/marketplace'
import Remocao from '../pages/carrinho'

describe('Remover produtos do carrinho com sucesso', () => {

    beforeEach(() => {
        Login.vistarPagina()
        Login.preencherCredenciaisValidas()
    })
    
    it('Adicionar Produto Tenda e Outro ao Carrinho com sucesso ', () => {
       Marketplace.addProdutoTenda()
       Marketplace.addProdutoSeller()
       Remocao.removerProdutoCarrinho('Refrigerante Sabor Uva Fanta 350ml')

    })
})

