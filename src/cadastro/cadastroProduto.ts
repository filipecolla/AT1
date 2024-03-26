import Cadastro from "./cadastro";
import Produto from "../modelo/produto";
import * as readline from 'readline';

export default class CadastroProduto extends Cadastro {
    private produto: Array<Produto>;
    private rl: readline.Interface;

    constructor(produto: Array<Produto>) {
        super();
        this.produto = produto
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    };

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        this.rl.question(`\nPor favor informe o nome do produto: `, (nomeProduto) => {
            this.rl.question(`Por favor informe o valor do produto: `, (valorProduto) => {
                this.rl.question(`Por favor informe o ID do produto: `, (idProduto) => {
                    let id = idProduto
                    let nome = nomeProduto;
                    let valor = valorProduto;
                    let produto = new Produto(nome, valor, id);
                    this.produto.push(produto);
                    console.log(`\nCadastro Concluído!`);
                    this.rl.close();
                });
            });
        });
    };
};