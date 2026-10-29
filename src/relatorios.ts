import type { Pedido, ItemPedido } from "./types.js";
import { pedidos } from "./pedidos.js";
import { buscarClientePorId } from "./clientes.js";

// Quantidade de pedidos registrados
export function contarPedidos(): number {
    return pedidos.length;
}

// Valor total das vendas
export function calcularTotalVendas(): number {
    return pedidos.reduce(
        (total: number, pedido: Pedido) => total + pedido.total,
        0
    );
}

// Quantidade total de unidades vendidas
export function calcularUnidadesVendidas(): number {
    return pedidos.reduce((total: number, pedido: Pedido) => {
        const unidadesDoPedido = pedido.itens.reduce(
            (soma: number, item: ItemPedido) => soma + item.quantidade,
            0
        );

        return total + unidadesDoPedido;
    }, 0);
}

// Mostrar os pedidos com os respectivos clientes
export function gerarRelatorioVendas(): void {
    console.log("\n===== RELATÓRIO DE VENDAS =====");

    if (pedidos.length === 0) {
        console.log("Nenhuma venda registrada.");
        return;
    }

    for (const pedido of pedidos) {
        const cliente = buscarClientePorId(pedido.clienteId);

        console.log("\nPedido:", pedido.id);
        console.log("Cliente:", cliente?.nome ?? "Não encontrado");
        console.log("Data:", pedido.data);
        console.log("Itens:");

        for (const item of pedido.itens) {
            console.log(
                `${item.nomeProduto} | ` +
                `Quantidade: ${item.quantidade} | ` +
                `Subtotal: R$ ${item.subtotal.toFixed(2)}`
            );
        }

        console.log("Total: R$", pedido.total.toFixed(2));
    }

    console.log("\nTotal de pedidos:", contarPedidos());
    console.log(
        "Unidades vendidas:",
        calcularUnidadesVendidas()
    );
    console.log(
        "Faturamento total: R$",
        calcularTotalVendas().toFixed(2)
    );
}