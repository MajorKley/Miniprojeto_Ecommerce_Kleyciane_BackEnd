import { buscarProdutoPorId } from "./produtos.js";
export const carrinho = [];
// Adicionar produto ao carrinho
export function adicionarAoCarrinho(produtoId, quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        throw new Error("A quantidade deve ser um inteiro positivo.");
    }
    const produto = buscarProdutoPorId(produtoId);
    if (!produto) {
        throw new Error("Produto não encontrado.");
    }
    const itemExistente = carrinho.find(item => item.produtoId === produtoId);
    const quantidadeAtual = itemExistente
        ? itemExistente.quantidade
        : 0;
    const novaQuantidade = quantidadeAtual + quantidade;
    if (novaQuantidade > produto.estoque) {
        throw new Error("Quantidade superior ao estoque disponível.");
    }
    if (itemExistente) {
        itemExistente.quantidade = novaQuantidade;
    }
    else {
        carrinho.push({
            produtoId,
            quantidade
        });
    }
}
// Remover produto do carrinho
export function removerDoCarrinho(produtoId) {
    const indice = carrinho.findIndex(item => item.produtoId === produtoId);
    if (indice === -1) {
        throw new Error("Produto não encontrado no carrinho.");
    }
    carrinho.splice(indice, 1);
}
// Alterar quantidade de um item
export function alterarQuantidade(produtoId, quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        throw new Error("A quantidade deve ser um inteiro positivo.");
    }
    const item = carrinho.find(item => item.produtoId === produtoId);
    if (!item) {
        throw new Error("Produto não encontrado no carrinho.");
    }
    const produto = buscarProdutoPorId(produtoId);
    if (!produto) {
        throw new Error("Produto não encontrado no catálogo.");
    }
    if (quantidade > produto.estoque) {
        throw new Error("Quantidade superior ao estoque disponível.");
    }
    item.quantidade = quantidade;
}
// Listar itens e calcular subtotais
export function listarItensCarrinho() {
    return carrinho.map(item => {
        const produto = buscarProdutoPorId(item.produtoId);
        if (!produto) {
            throw new Error("Produto do carrinho não encontrado.");
        }
        return {
            produtoId: produto.id,
            nome: produto.nome,
            precoUnitario: produto.preco,
            quantidade: item.quantidade,
            subtotal: produto.preco * item.quantidade
        };
    });
}
// Calcular total da compra
export function calcularTotalCarrinho() {
    return listarItensCarrinho().reduce((total, item) => total + item.subtotal, 0);
}
//# sourceMappingURL=carrinho.js.map