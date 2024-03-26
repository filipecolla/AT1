import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import * as readline from "readline";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private rl: readline.Interface;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    };

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        this.rl.question(`\nPor favor informe o nome do cliente: `, (nome) => {
            this.rl.question(`Por favor informe o nome social do cliente: `, (nomeSocial) => {
                this.rl.question(`Por favor informe o número do CPF: `, (valorCPF) => {
                    this.rl.question(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `, (data) => {
                        this.rl.question(`Como você se identifica: (Informe no padrão M = Masculino e F = Feminino)`, (genero) => {
                            let partesData = data.split('/');
                            let ano = Number(partesData[2]);
                            let mes = Number(partesData[1]);
                            let dia = Number(partesData[0]);
                            let dataEmissao = new Date(ano, mes - 1, dia);
                            let cpf = new CPF(valorCPF, dataEmissao);
                            let cliente = new Cliente(nome, nomeSocial, cpf, genero);
                            this.clientes.push(cliente);
                            console.log(`\nCadastro concluído!\n`);
                            this.rl.close();
                        });
                    });
                });
            });
        });
    }};
