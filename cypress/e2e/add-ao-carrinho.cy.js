import Login from '../pages/login'
import Marketplace from '../pages/marketplace'

describe('Adicionar Produtos ao Carrinho', () => {

    beforeEach(() => {
        Login.vistarPagina()
        Login.preencherCredenciaisValidas()
    })
    
    it('Adicionar Produto Tenda e Outro ao Carrinho com sucesso ', () => {
       Marketplace.addProdutoTenda()
       Marketplace.addProdutoSeller()

    })
})
