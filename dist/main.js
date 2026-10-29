import { cadastrarProduto, listarProdutos, buscarProdutoPorNome, atualizarProduto, buscarProdutoPorId } from "./produtos.js";
import { cadastrarCliente, listarClientes, buscarClientePorId } from "./clientes.js";
import { adicionarAoCarrinho, alterarQuantidade, listarItensCarrinho, calcularTotalCarrinho } from "./carrinho.js";
import { finalizarPedido, listarPedidos, listarPedidosPorCliente } from "./pedidos.js";
import { gerarRelatorioVendas } from "./relatorios.js";
// Executar uma operação e apresentar o erro esperado
function testarErro(descricao, operacao) {
    console.log("\nTeste:", descricao);
    try {
        operacao();
        console.log("A operação foi executada.");
    }
    catch (erro) {
        if (erro instanceof Error) {
            console.log("Erro esperado:", erro.message);
        }
        else {
            console.log("Ocorreu um erro desconhecido.");
        }
    }
}
console.log("===== SISTEMA DE E-COMMERCE =====");
// 1. Consultar produtos
console.log("\n===== PRODUTOS INICIAIS =====");
console.log(listarProdutos());
// 2. Cadastrar e consultar um produto
console.log("\n===== CADASTRO DE PRODUTO =====");
cadastrarProduto({
    id: 4,
    nome: "Fone de ouvido",
    categoria: "Audio",
    preco: 120,
    estoque: 8
});
console.log("Produto cadastrado:");
console.log(buscarProdutoPorId(4));
console.log("Busca por nome:", buscarProdutoPorNome("fone"));
// 3. Atualizar um produto
atualizarProduto(4, { preco: 110 });
console.log("Produto após atualização:", buscarProdutoPorId(4));
// 4. Consultar e cadastrar clientes
console.log("\n===== CLIENTES =====");
console.log(listarClientes());
cadastrarCliente({
    id: 4,
    nome: "Daniel Oliveira",
    email: "daniel@email.com"
});
console.log("Cliente cadastrado:");
console.log(buscarClientePorId(4));
// 5. Testar situações inválidas
console.log("\n===== TESTES DE ERRO =====");
// Teste inválido 1: preço negativo
testarErro("Cadastrar produto com preço negativo", () => {
    cadastrarProduto({
        id: 5,
        nome: "Produto inválido",
        categoria: "Teste",
        preco: -10,
        estoque: 5
    });
});
// Teste inválido 2: finalizar compra sem itens
testarErro("Finalizar pedido com carrinho vazio", () => {
    finalizarPedido(1);
});
// Teste inválido 3: quantidade superior ao estoque
testarErro("Adicionar quantidade superior ao estoque", () => {
    adicionarAoCarrinho(1, 999);
});
// 6. Adicionar produtos ao carrinho
console.log("\n===== CARRINHO =====");
adicionarAoCarrinho(1, 2);
adicionarAoCarrinho(2, 1);
// Alterar a quantidade do mouse para duas unidades
alterarQuantidade(2, 2);
console.log("Itens do carrinho:");
console.log(listarItensCarrinho());
console.log("Total da compra: R$", calcularTotalCarrinho().toFixed(2));
// 7. Finalizar pedido
console.log("\n===== FINALIZAÇÃO DO PEDIDO =====");
const pedido = finalizarPedido(1);
console.log("Pedido registrado:");
console.log(pedido);
// 8. Conferir estoque após a compra
console.log("\n===== ESTOQUE ATUALIZADO =====");
console.log(listarProdutos());
// 9. Consultar pedidos
console.log("\n===== TODOS OS PEDIDOS =====");
console.log(listarPedidos());
console.log("\n===== PEDIDOS DO CLIENTE 1 =====");
console.log(listarPedidosPorCliente(1));
// 10. Gerar relatório de vendas
gerarRelatorioVendas();
console.log("\n===== FIM DA DEMONSTRAÇÃO =====");
//# sourceMappingURL=main.js.map