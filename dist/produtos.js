export const produtos = [
    {
        id: 1,
        nome: "Teclado",
        categoria: "Perifericos",
        preco: 80,
        estoque: 10
    },
    {
        id: 2,
        nome: "Mouse",
        categoria: "Perifericos",
        preco: 50,
        estoque: 15
    },
    {
        id: 3,
        nome: "Monitor",
        categoria: "Monitores",
        preco: 700,
        estoque: 5
    }
];
// Cadastrar produto
export function cadastrarProduto(produto) {
    if (produtos.some(p => p.id === produto.id)) {
        throw new Error("Já existe um produto com esse ID.");
    }
    if (!produto.nome.trim()) {
        throw new Error("O nome do produto é obrigatório.");
    }
    if (!produto.categoria.trim()) {
        throw new Error("A categoria é obrigatória.");
    }
    if (!Number.isFinite(produto.preco) || produto.preco <= 0) {
        throw new Error("O preço deve ser maior que zero.");
    }
    if (!Number.isInteger(produto.estoque) || produto.estoque < 0) {
        throw new Error("O estoque deve ser um inteiro não negativo.");
    }
    produtos.push(produto);
}
// Listar todos os produtos
export function listarProdutos() {
    return produtos;
}
// Buscar produto pelo ID
export function buscarProdutoPorId(id) {
    return produtos.find(p => p.id === id);
}
// Buscar produtos por parte do nome
export function buscarProdutoPorNome(nome) {
    const termo = nome.trim().toLowerCase();
    if (!termo) {
        return [];
    }
    return produtos.filter(p => p.nome.toLowerCase().includes(termo));
}
// Filtrar por categoria
export function filtrarProdutosPorCategoria(categoria) {
    return produtos.filter(p => p.categoria.toLowerCase() === categoria.trim().toLowerCase());
}
// Atualizar um produto
export function atualizarProduto(id, dados) {
    const produto = buscarProdutoPorId(id);
    if (!produto) {
        throw new Error("Produto não encontrado.");
    }
    const atualizado = { ...produto, ...dados };
    if (!atualizado.nome.trim()) {
        throw new Error("O nome do produto é obrigatório.");
    }
    if (!atualizado.categoria.trim()) {
        throw new Error("A categoria é obrigatória.");
    }
    if (!Number.isFinite(atualizado.preco) || atualizado.preco <= 0) {
        throw new Error("O preço deve ser maior que zero.");
    }
    if (!Number.isInteger(atualizado.estoque) ||
        atualizado.estoque < 0) {
        throw new Error("O estoque deve ser um inteiro não negativo.");
    }
    Object.assign(produto, atualizado);
    return produto;
}
// Remover um produto
export function removerProduto(id) {
    const indice = produtos.findIndex(p => p.id === id);
    if (indice === -1) {
        throw new Error("Produto não encontrado.");
    }
    produtos.splice(indice, 1);
}
//# sourceMappingURL=produtos.js.map