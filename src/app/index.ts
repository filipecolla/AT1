import CadastroCliente from "../cadastro/cadastroCliente";
import * as readline from 'readline';
import Cliente from "../modelo/cliente";
import ListagemClientes from "../listagem/listagemClientes";
import CadastroProduto from "../cadastro/cadastroProduto";
import Produto from "../modelo/produto";
import CadastroServico from "../cadastro/cadastroServico";
import Servico from "../modelo/servico";
import listagemClienteMaisConsumiram from "../listagem/listagemClienteMaisConsumiram";
import listagemGeneroMasculino from "../listagem/listagemGeneroMasculino";
import listagemGeneroFemenino from "../listagem/listagemGeneroFemenino";
import ListagemProdutosServicosMaisConsumidos from "../listagem/listagemMaisConsumidos";
import ListagemServicosProdutosMaisConsumidosFeminino from "../listagem/listagemMaisConsumidoFeminino";
import ListagemServicosProdutosMaisConsumidosMasculino from "../listagem/listagemMaisConsumidoMasculino";
import listagemClientesMenosConsumiram from "../listagem/listagemClientesMenosConsumiram";
import ListagemClientesMaisConsumiramValor from "../listagem/listagemMaisConsumiramEmValor";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clientes: Array<Cliente> = [];
const produtos: Array<Produto> = [];
const servicos: Array<Servico> = [];

function iniciar() {
    console.log(`\nBem-vindo ao novo programa do Grupo World Beauty!`);
    console.log(`\nOpções de inicialização: `);
    rl.question(`\n1 - Cadastrar cliente\n2 - Listar os clientes\n3 - Alterar dados\n0 - Sair\n\nOpção: `, (opcao) => {
        if (opcao === '1') {
            console.log(`\nDentre as seguintes opções, qual você deseja cadastrar: `);
            rl.question(`\n1 - Cliente\n2 - Produto\n3 - Serviço\n\nOpção: `, (CadastroOpcao) => {
                switch (CadastroOpcao) {
                    case '1':
                        const cadastroCliente = new CadastroCliente(clientes);
                        cadastroCliente.cadastrar();
                        break;
                    case '2':
                        const cadastroProduto = new CadastroProduto(produtos);
                        cadastroProduto.cadastrar();
                        break;
                    case '3':
                        const cadastrarServico = new CadastroServico(servicos);
                        cadastrarServico.cadastrar();
                        break;
                    default:
                        console.log('\nOpção inválida!');
                        iniciar();
                        break;
                };
            });
        } else if(opcao === '2') {
            console.log(`\nDentre as seguintes opções, qual você deseja listar: `);
            rl.question(`\n1 - Listagem dos 10 que mais consumiram produtos ou serviços, em quantidade, não em valor\n2 - Listagem de todos os clientes por gênero\n3 - Listagem geral dos serviços ou produtos mais consumidos\n4 - Listagem dos serviços ou produtos mais consumidos por gênero\n5 - Listagem dos 10 clientes que menos consumiram produtos ou serviços\n6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n7 - Listagem de todos os clientes\n\nOpção: `, (opcaoListagem) => {
                if (opcaoListagem === '2') {
                    console.log(`\nQual gênero deseja listar: `);
                    rl.question(`\n1 - Masculino\n2 - Femenino\n\nOpção: `, (opcaoGenero) => {
                        switch(opcaoGenero) {
                            case '1':
                                const listagemGeneroMasculinos = new listagemGeneroMasculino(clientes)
                                listagemGeneroMasculinos.listar();
                                break;
                            case '2':
                                const listagemGeneroFemeninos = new listagemGeneroFemenino(clientes)
                                listagemGeneroFemeninos.listar();
                                break;
                            default:
                                console.log(`\nOpção inválida!`);
                                iniciar();
                                break;
                        };
                    });
                } else if (opcaoListagem === '4') {
                    console.log(`\nQual gênero deseja listar: `);
                    rl.question(`\n1 - Masculino\n2 - Feminino\n\nOpção: `, (opcaoGeneroListagem) => {
                        switch(opcaoGeneroListagem) {
                            case '1':
                                const listagemMaisConsumido = new ListagemServicosProdutosMaisConsumidosMasculino(clientes)
                                listagemMaisConsumido.listar();
                                break;
                            case '2':
                                const listagemMaisConsumido1 = new ListagemServicosProdutosMaisConsumidosFeminino(clientes)
                                listagemMaisConsumido1.listar();
                                break;
                            default:
                                console.log(`\nOpção inválida!`);
                                iniciar();
                                break;
                        };
                    });
                } else {
                switch(opcaoListagem) {
                    case '1' :
                        const listagemClienteMais = new listagemClienteMaisConsumiram(clientes)
                        listagemClienteMais.listar();
                        break;
                    case '3':
                        const listagemProdutosServicosConsumidos = new ListagemProdutosServicosMaisConsumidos(clientes)
                        listagemProdutosServicosConsumidos.listar();
                        break;
                    case '5':
                        const listagemMenosConsumiram = new listagemClientesMenosConsumiram(clientes)
                        listagemMenosConsumiram.listar();
                        break;
                    case '6':
                        const listagemMaisConsumidoValor = new ListagemClientesMaisConsumiramValor(clientes)
                        listagemMaisConsumidoValor.listar();
                        break;
                    case '7':
                        const listagemClientes = new ListagemClientes(clientes)
                        listagemClientes.listar();
                        break;
                    default:
                        console.log(`\nOpção inválida!`);
                        iniciar();
                        break;
                }};
            });
        } else if (opcao === '3') {
                    console.log(`\nQual das opções abaixo você deseja alterar: `);
                    rl.question(`\n1 - Clientes\n2 - Produtos\n3 - Serviços\n\nOpção: `, (opcoesAlterar) => {
                        if (opcoesAlterar === '1') {
                            console.log(`\nAlteração de dados do Cliente: `);
                            rl.question(`\nDigite o CPF do cliente que deseja alterar os dados: `, (cpfAlterar) => {
                                const clienteEncontrado = clientes.find(cliente => cliente.getCpf.getValor === cpfAlterar);
                                if (clienteEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Cliente\n2 - Nome Social do Cliente\n3 - Gênero do Cliente\n4 - Adicionar Produto/Serviço\n5 - Excluir Produto/Serviço\n\nOpção: `, (clienteEncontrados) => {
                                        if (clienteEncontrados === '1') {
                                            console.log(`\nAlterando o Nome do cliente: ${clienteEncontrado.nome}`);
                                            rl.question(`\nQual o novo Nome: `, (novoNome) => {
                                                clienteEncontrado.nome = novoNome;
                                            });

                                            console.log(`\nNome alterado com sucesso!`);
                                            iniciar();

                                        } else if (clienteEncontrados === '2') {
                                            console.log(`\nAlterando o Nome Social do Cliente: ${clienteEncontrado.nomeSocial}`)
                                            rl.question(`\nQual o novo Nome Social: `, (novoNomeSocial) => {
                                                clienteEncontrado.nomeSocial = novoNomeSocial;
                                            });

                                            console.log(`\nNome Social alterado com sucesso!`);
                                            iniciar();

                                        } else if (clienteEncontrados === '3') {
                                            console.log(`Alterando o Gênero de ${clienteEncontrado.nome}, que é ${clienteEncontrado.getGenero}`);
                                            rl.question(`\nQual o novo Gênero: (Masculino / Feminino)`, (novoGenero) => {
                                                clienteEncontrado.genero = novoGenero;
                                            });

                                            console.log(`\nGênero Alterado com sucesso!`);
                                            iniciar();

                                        } else if (clienteEncontrados === '4') {
                                            console.log(`\nAdicionando Produto/Serviço: `);
                                            rl.question(`\nQual serviço você deseja adicionar:\n1 - Produto\n2 - Serviço\n\nOpção: `, (opcaoAdicionar) => {
                                                if(opcaoAdicionar === '1') {
                                                    rl.question(`\nQual o ID do produto que deseja adicionar: `, (idProdutoAdicionar) => {
                                                        const idProdutoEncontrado = produtos.find(produto => produto.getId === idProdutoAdicionar);
                                                        if (idProdutoEncontrado) {
                                                            console.log(`\nAdicionando ${idProdutoEncontrado.nome} em ${clienteEncontrado.nome}`);
                                                            clienteEncontrado.adicionarProdutoConsumido(idProdutoEncontrado);
                                                            console.log(`\nProduto ${idProdutoEncontrado.nome} adicionado no Cliente ${clienteEncontrado.nome}!`);
                                                            iniciar();

                                                        } else {
                                                            console.log(`\nID não encontrado!`);
                                                            iniciar();
                                                        };
                                                    });
                                                } else if (opcaoAdicionar === '2') {
                                                    rl.question(`\nQual o ID do serviço que deseja adicionar: `, (idServicoAdicionar) => {
                                                        const idServicoEncontrado = servicos.find(servico => servico.getId === idServicoAdicionar);
                                                        if (idServicoEncontrado) {
                                                            console.log(`\nAdicionando ${idServicoEncontrado.nome} em ${clienteEncontrado.nome}`);
                                                            clienteEncontrado.adicionarServicoConsumido(idServicoEncontrado);
                                                            console.log(`\nServiço ${idServicoEncontrado.nome} adicionado no Cliente ${clienteEncontrado.nome}!`);
                                                            iniciar();
                                                        } else {
                                                            console.log(`\nID de serviço não encontrado!`);
                                                            iniciar();
                                                        };
                                                    })
                                                } else {
                                                    console.log(`\nError!`);
                                                    console.log(`\nOpção inválida!`);
                                                    iniciar();
                                                };
                                            });
                                        } else {
                                            console.log(`\nError!`);
                                            console.log(`Opção inválida!`);
                                            iniciar();
                                        };
                                    })
                                } else {
                                    console.log(`\nCPF não encontrado!\n`);
                                    iniciar();
                                };
                            })
                        } else if (opcoesAlterar === '2') {
                            console.log(`\nAlteração de dados de Produto: `);
                            rl.question(`\nQual o ID do produto: `, (idProduto) => {
                                const produtoEncontrado = produtos.find(produto => produto.getId === idProduto);
                                if (produtoEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Produto\n2 - Valor do Produto\n\nOpção: `, (produtoAlterar) => {
                                        if (produtoAlterar === '1') {
                                            console.log(`\nAlterando o nome do produto ${produtoEncontrado.nome}`);
                                            rl.question(`\nQual o novo nome desejado: `, (novoNomeProduto) => {
                                                produtoEncontrado.nome = novoNomeProduto;
                                            });

                                            console.log(`\nNome do produto alterado com sucesso!`);
                                            iniciar();

                                        } else if (produtoAlterar === '2') {
                                            console.log(`\nAlterando o valor do produto ${produtoEncontrado.nome} de ${produtoEncontrado.valor}`);
                                            rl.question(`\nQual o novo valor a ser atribuido: `, (novoValorProduto) => {
                                                produtoEncontrado.valor = novoValorProduto;
                                            });
                                        } else {
                                            console.log(`\nError!`);
                                            console.log(`Opção inválida!`);
                                            iniciar();
                                        }
                                    });
                                } else {
                                    console.log(`\nID de produto não encontrado!`);
                                    iniciar();
                                };
                            });
                        } else if (opcoesAlterar === '3') {
                            console.log(`\nAlterações de dados de serviço: `);
                            rl.question(`\nQual o ID do serviço: `, (idServico) => {
                                const servicoEncontrado = servicos.find(servico => servico.getId === idServico);
                                if (servicoEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Serviço\n2 - Valor do Serviço`, (opcaoServico) => {
                                        if (opcaoServico === '1') {
                                            console.log(`\nAlterando o nome do Serviço ${servicoEncontrado.nome}`);
                                            rl.question(`\nQual seria o novo Nome: `, (novoNome) => {
                                                servicoEncontrado.nome = novoNome;
                                            });

                                            console.log(`\nNome do Serviço alterado com secusso!`);
                                            iniciar();

                                        } else if (opcaoServico === '2') {
                                            console.log(`\nAlterando o valor do serviço ${servicoEncontrado.nome} de ${servicoEncontrado.valor}`);
                                            rl.question(`\nQual o novo valor a ser atribuido: `, (novoValorServico) => {
                                                servicoEncontrado.valor = novoValorServico;
                                            });

                                            console.log(`\nValor do Serviço alterado com sucesso!`);
                                            iniciar
                                        } else {
                                            console.log(`\nError!`)
                                            console.log(`Opção inválida!`)
                                            iniciar();
                                        };
                                    })
                                } else {
                                    console.log(`\nID de serviçp não encontrado!`);
                                    iniciar();
                                };
                            });
                        } else {
                            console.log(`\nError!`)
                            console.log(`Opção inválida!`)
                            iniciar();
                        };
                    });
        } else if (opcao === '0') {
            console.log(`\nAté mais!`);
            rl.close();
        } else {
            console.log(`\nError!`)
            console.log(`Opção inválida!`)
            iniciar();
        };
    });
};

const data1 = new Date(2004, 10, 4);
const cpf1 = new CPF('515.518.088.03', data1);
const telefone1 = new Telefone('12', '997601410');
const cliente1 = new Cliente(`Filipe Colla`, `Filipe`, cpf1, `masculino`, telefone1);

clientes.push(cliente1)
        
iniciar();