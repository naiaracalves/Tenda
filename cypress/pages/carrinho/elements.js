export const elements = {
  apagarButton: '.icon-trash',
  confirmarButton: 'button',
  tipoProdutoSeller: '.seller-name',

  // Agora corretamente dinâmico:
  checkboxProduto: (nome) => `input[type="checkbox"][name="checkbox-${nome}"]`
};