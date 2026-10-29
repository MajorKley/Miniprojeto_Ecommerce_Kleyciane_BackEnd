import type { Produto } from "./types.js";
export declare const produtos: Produto[];
export declare function cadastrarProduto(produto: Produto): void;
export declare function listarProdutos(): Produto[];
export declare function buscarProdutoPorId(id: number): Produto | undefined;
export declare function buscarProdutoPorNome(nome: string): Produto[];
export declare function filtrarProdutosPorCategoria(categoria: string): Produto[];
export declare function atualizarProduto(id: number, dados: Partial<Omit<Produto, "id">>): Produto;
export declare function removerProduto(id: number): void;
//# sourceMappingURL=produtos.d.ts.map