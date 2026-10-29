import type { ItemCarrinho } from "./types.js";
export declare const carrinho: ItemCarrinho[];
export declare function adicionarAoCarrinho(produtoId: number, quantidade: number): void;
export declare function removerDoCarrinho(produtoId: number): void;
export declare function alterarQuantidade(produtoId: number, quantidade: number): void;
export declare function listarItensCarrinho(): {
    produtoId: number;
    nome: string;
    precoUnitario: number;
    quantidade: number;
    subtotal: number;
}[];
export declare function calcularTotalCarrinho(): number;
//# sourceMappingURL=carrinho.d.ts.map