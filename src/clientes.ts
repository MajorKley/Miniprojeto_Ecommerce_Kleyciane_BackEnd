
import type { Cliente } from "./types.js";

export const clientes: Cliente[] = [
    {
        id: 1,
        nome: "Ana Silva",
        email: "ana@email.com"
    },
    {
        id: 2,
        nome: "Bruno Santos",
        email: "bruno@email.com"
    },
    {
        id: 3,
        nome: "Carla Souza",
        email: "carla@email.com"
    }
];

// Cadastrar cliente
export function cadastrarCliente(cliente: Cliente): void {
    if (clientes.some(c => c.id === cliente.id)) {
        throw new Error("Já existe um cliente com esse ID.");
    }

    const email = cliente.email.trim().toLowerCase();

    if (clientes.some(c => c.email.toLowerCase() === email)) {
        throw new Error("Esse e-mail já está cadastrado.");
    }

    if (!cliente.nome.trim()) {
        throw new Error("O nome do cliente é obrigatório.");
    }

    if (!email || !email.includes("@")) {
        throw new Error("Informe um e-mail válido.");
    }

    clientes.push({
        ...cliente,
        nome: cliente.nome.trim(),
        email
    });
}

// Listar clientes
export function listarClientes(): Cliente[] {
    return clientes;
}

// Buscar cliente pelo ID
export function buscarClientePorId(
    id: number
): Cliente | undefined {
    return clientes.find(c => c.id === id);
}
