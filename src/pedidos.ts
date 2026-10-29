
import type { Pedido, ItemPedido } from "./types.js";
import { buscarClientePorId } from "./clientes.js";
import { buscarProdutoPorId } from "./produtos.js";
import { carrinho } from "./carrinho.js";

export const pedidos: Pedido[] = [];

// Finalizar compra
export function finalizarPedido(clienteId: number): Pedido {
    // 1. Verificar o cliente
    const cliente = buscarClientePorId(clienteId);

    if (!cliente) {
        throw new Error("Cliente não encontrado.");
    }

    // 2. Verificar se o carrinho possui itens
    if (carrinho.length === 0) {
        throw new Error("Não é possível finalizar um pedido sem itens.");
    }

    // 3. Validar todos os itens antes de alterar qualquer estoque
    const itensPedido: ItemPedido[] = [];

    for (const item of carrinho) {
        const produto = buscarProdutoPorId(item.produtoId);

        if (!produto) {
            throw new Error(
                `Produto ${item.produtoId} não encontrado.`
            );
        }

        if (
            !Number.isInteger(item.quantidade) ||
            item.quantidade <= 0
        ) {
            throw new Error("Existe uma quantidade inválida no carrinho.");
        }

        if (item.quantidade > produto.estoque) {
            throw new Error(
                `Estoque insuficiente para o produto ${produto.nome}.`
            );
        }

        // Guardar os dados e o preço praticado na compra
        itensPedido.push({
            produtoId: produto.id,
            nomeProduto: produto.nome,
            quantidade: item.quantidade,
            precoUnitario: produto.preco,
            subtotal: produto.preco * item.quantidade
        });
    }

    // 4. Calcular o total
    const total = itensPedido.reduce(
        (soma, item) => soma + item.subtotal,
        0
    );

    // 5. Criar o pedido
    const pedido: Pedido = {
        id: `PED-${pedidos.length + 1}`,
        clienteId: cliente.id,
        itens: itensPedido,
        total,
        data: new Date().toISOString()
    };

    // 6. Atualizar o estoque após validar todos os itens
    for (const item of itensPedido) {
        const produto = buscarProdutoPorId(item.produtoId);

        // O produto já foi validado no primeiro loop.
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    }

    // 7. Registrar o pedido e limpar o carrinho
    pedidos.push(pedido);
    carrinho.length = 0;

    return pedido;
}

// Consultar todos os pedidos
export function listarPedidos(): Pedido[] {
    return pedidos;
}

// Consultar pedidos de um cliente
export function listarPedidosPorCliente(
    clienteId: number
): Pedido[] {
    return pedidos.filter(
        pedido => pedido.clienteId === clienteId
    );
}
