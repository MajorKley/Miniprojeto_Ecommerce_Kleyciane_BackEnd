# Sistema de Gerenciamento de E-commerce

## Identificação

- **Aluna:** Kleyciane Dutra Mendes
- **Turma:** Back End T5
- **Curso:** Desenvolvedor Back-end Node
- **Programa:** SCTEC
- **Projeto:** Mini-Projeto Avaliativo — Módulo 1, Semana 07

## 1. Objetivo

Desenvolver um sistema de gerenciamento de e-commerce utilizando TypeScript e Node.js, executado pelo terminal, para simular operações básicas de uma loja virtual.

O sistema permite gerenciar produtos e clientes, controlar um carrinho de compras, registrar pedidos, atualizar o estoque e gerar relatórios de vendas.

## 2. Funcionalidades implementadas

### Produtos
- Cadastro de produtos.
- Listagem dos produtos cadastrados.
- Busca de produtos por ID e por nome.
- Filtragem de produtos por categoria.
- Atualização de informações dos produtos.
- Remoção de produtos.
- Validação de preço e estoque.
- Verificação de IDs duplicados.

### Clientes
- Cadastro de clientes.
- Listagem dos clientes cadastrados.
- Busca de clientes por ID.
- Validação de informações obrigatórias.
- Verificação de IDs e e-mails duplicados.

### Carrinho de compras
- Adição de produtos ao carrinho.
- Remoção de produtos do carrinho.
- Alteração da quantidade de itens.
- Listagem dos itens adicionados.
- Cálculo do subtotal de cada item.
- Cálculo do valor total da compra.
- Validação de quantidades e disponibilidade em estoque.
- Atualização da quantidade quando um produto já existente no carrinho é adicionado novamente.

### Pedidos
- Registro de pedidos para clientes cadastrados.
- Geração de identificador para cada pedido.
- Registro da data do pedido.
- Armazenamento dos produtos, quantidades, preços unitários e subtotais.
- Cálculo do valor total do pedido.
- Consulta de todos os pedidos.
- Consulta de pedidos por cliente.
- Atualização do estoque após a confirmação do pedido.
- Validação do carrinho e da disponibilidade dos produtos antes da finalização.

### Relatórios
- Consulta dos pedidos registrados.
- Identificação dos clientes associados aos pedidos.
- Exibição dos itens vendidos e respectivos subtotais.
- Contagem de pedidos realizados.
- Cálculo da quantidade total de unidades vendidas.
- Cálculo do faturamento total.

## 3. Tecnologias utilizadas

- **TypeScript:** tipagem estática, interfaces, funções e organização do código.
- **Node.js:** execução do sistema.
- **npm:** gerenciamento de pacotes do projeto.
- **Git:** controle de versão.
- **GitHub:** hospedagem do repositório.

### Versões utilizadas

- Node.js: `v24.16.0`
- TypeScript: `7.0.2` (versão local informada do projeto)

## 4. Estrutura do projeto

```text
Miniprojeto_Ecommerce_Kleyciane_BackEnd/
├── src/
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   ├── relatorios.ts
│   └── main.ts
├── dist/
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

A estrutura acima representa a organização prevista do projeto. Os arquivos de configuração e a presença de cada item devem corresponder ao conteúdo efetivamente publicado no repositório.

### Responsabilidade dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `types.ts` | Definição das interfaces e dos tipos utilizados no sistema. |
| `produtos.ts` | Cadastro, consulta, atualização e remoção de produtos. |
| `clientes.ts` | Cadastro e consulta de clientes. |
| `carrinho.ts` | Gerenciamento dos itens do carrinho e cálculo dos valores. |
| `pedidos.ts` | Registro, consulta e finalização de pedidos. |
| `relatorios.ts` | Geração dos relatórios de vendas. |
| `main.ts` | Execução e demonstração das operações do sistema. |

O diretório `src/` contém os arquivos TypeScript. O diretório `dist/` é utilizado para armazenar os arquivos JavaScript gerados durante a compilação, conforme a configuração do projeto.

## 5. Instalação e execução

### Pré-requisitos

É necessário ter o Node.js e o npm instalados. O projeto também utiliza o compilador TypeScript.

### 5.1. Clonar o repositório

```bash
git clone https://github.com/MajorKley/Miniprojeto_Ecommerce_Kleyciane_BackEnd.git
```

Acesse a pasta do projeto:

```bash
cd Miniprojeto_Ecommerce_Kleyciane_BackEnd
```

### 5.2. Instalar as dependências

```bash
npm install
```

### 5.3. Compilar o TypeScript

```bash
npx tsc
```

Esse comando compila os arquivos TypeScript de acordo com as configurações definidas em `tsconfig.json`.

### 5.4. Executar o sistema

```bash
node dist/main.js
```

O programa apresenta no terminal a demonstração das operações, incluindo cadastro e consulta de produtos, gerenciamento de clientes, testes de validação, carrinho, finalização de pedido, atualização do estoque e relatório de vendas.

**Observação:** os comandos de compilação e execução pressupõem que o `tsconfig.json` esteja configurado para gerar `dist/main.js`. Se a configuração do projeto for diferente, os comandos deverão ser ajustados.

## 6. Exemplos de execução

### Cadastro e atualização de produto

O sistema inicia com três produtos cadastrados:

| ID | Produto | Categoria | Preço | Estoque inicial |
|---:|---|---|---:|---:|
| 1 | Teclado | Perifericos | R$ 80,00 | 10 |
| 2 | Mouse | Perifericos | R$ 50,00 | 15 |
| 3 | Monitor | Monitores | R$ 700,00 | 5 |

Durante a demonstração, foi cadastrado o produto Fone de ouvido, com preço inicial de R$ 120,00 e estoque de 8 unidades. Em seguida, seu preço foi atualizado para R$ 110,00.

### Cadastro de clientes

O sistema inicia com três clientes:

- Ana Silva
- Bruno Santos
- Carla Souza

Durante a demonstração, também foi cadastrado o cliente Daniel Oliveira.

### Carrinho de compras

Na demonstração, o carrinho foi composto pelos seguintes itens:

| Produto | Quantidade | Preço unitário | Subtotal |
|---|---:|---:|---:|
| Teclado | 2 | R$ 80,00 | R$ 160,00 |
| Mouse | 2 | R$ 50,00 | R$ 100,00 |
| **Total** | **4** | | **R$ 260,00** |

### Finalização do pedido

Foi registrado o pedido `PED-1`, associado à cliente Ana Silva, com total de R$ 260,00.

Após a finalização, o estoque foi atualizado:

| Produto | Estoque anterior | Estoque após o pedido |
|---|---:|---:|
| Teclado | 10 | 8 |
| Mouse | 15 | 13 |
| Monitor | 5 | 5 |
| Fone de ouvido | 8 | 8 |

### Relatório de vendas

O relatório gerado apresentou os seguintes resultados:

- Total de pedidos: 1
- Unidades vendidas: 4
- Faturamento total: R$ 260,00

## 7. Regras de negócio e validações

O sistema aplica validações para impedir operações inválidas, incluindo:

- O preço de um produto deve ser maior que zero.
- O estoque de um produto não pode ser negativo.
- Os IDs dos produtos devem ser únicos.
- Os produtos devem possuir nome e categoria preenchidos.
- Os clientes devem possuir nome e e-mail válidos conforme as verificações implementadas.
- Os IDs e e-mails dos clientes não podem ser duplicados.
- As quantidades adicionadas ao carrinho devem ser positivas.
- A quantidade solicitada não pode ultrapassar o estoque disponível.
- O pedido deve estar associado a um cliente cadastrado.
- Não é permitido finalizar um pedido com o carrinho vazio.
- O estoque deve ser atualizado após a finalização bem-sucedida do pedido.

Os pedidos armazenam os preços dos produtos no momento da compra, permitindo registrar os valores praticados naquela operação.

## 8. Testes realizados

Durante a execução do programa, foram realizados testes de operações válidas e de situações inválidas.

| Cenário | Resultado esperado | Resultado observado |
|---|---|---|
| Cadastro de produto com preço negativo | Rejeitar o cadastro | Erro de validação exibido |
| Finalização de pedido com carrinho vazio | Impedir a finalização | Erro de validação exibido |
| Adição de quantidade superior ao estoque | Rejeitar a operação | Erro de validação exibido |
| Cadastro de produto válido | Cadastrar o produto | Produto cadastrado |
| Busca de produto por nome | Retornar o produto correspondente | Produto encontrado |
| Atualização de produto | Alterar o preço informado | Preço atualizado |
| Cadastro de cliente | Registrar o cliente | Cliente cadastrado |
| Finalização de compra | Registrar o pedido | Pedido `PED-1` criado |
| Atualização do estoque | Descontar as unidades compradas | Estoque atualizado |
| Geração de relatório | Apresentar os dados das vendas | Relatório gerado |

A execução de demonstração foi concluída sem erros inesperados, e os três cenários inválidos produziram as mensagens de validação esperadas.

## 9. Limitações conhecidas

- Os dados são mantidos em memória durante a execução do programa.
- Não há persistência em banco de dados; os dados cadastrados não são mantidos automaticamente após o encerramento do processo.
- A interação é realizada pelo terminal, sem interface gráfica.
- O projeto simula operações de uma loja virtual e não implementa, nesta demonstração, processamento real de pagamentos.

Outras limitações dependem das funcionalidades efetivamente implementadas no código.

## 10. Repositório

O código-fonte do projeto está disponível no GitHub:

[Miniprojeto_Ecommerce_Kleyciane_BackEnd](https://github.com/MajorKley/Miniprojeto_Ecommerce_Kleyciane_BackEnd)

## 11. Considerações finais

O projeto foi desenvolvido como atividade prática do curso Desenvolvedor Back-end Node, do programa SCTEC, com o objetivo de aplicar conceitos de TypeScript e Node.js na construção de um sistema de gerenciamento de e-commerce.

A implementação reúne operações de cadastro e consulta, validação de dados, manipulação de arrays, organização do código em módulos, gerenciamento de carrinho, registro de pedidos, controle de estoque e geração de relatórios.

A execução de demonstração confirmou o funcionamento dos principais fluxos descritos neste documento.