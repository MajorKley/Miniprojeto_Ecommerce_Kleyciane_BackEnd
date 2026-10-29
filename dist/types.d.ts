export interface Produto {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}
export interface Cliente {
    id: number;
    nome: string;
    email: string;
}
export interface ItemCarrinho {
    produtoId: number;
    quantidade: number;
}
export interface ItemPedido {
    produtoId: number;
    nomeProduto: string;
    quantidade: number;
    precoUnitario: number;
    subtotal: number;
}
export interface Pedido {
    id: string;
    clienteId: number;
    itens: ItemPedido[];
    total: number;
    data: string;
}
//# sourceMappingURL=types.d.ts.map