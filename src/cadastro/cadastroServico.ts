import * as readline from 'readline';
import Servico from '../modelo/servico';
import Cadastro from './cadastro';

export default class CadastroServico extends Cadastro {
    private servico: Array<Servico>;
    private rl: readline.Interface;

    constructor(servico: Array<Servico>) {
        super()
        this.servico = servico;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    };

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviços: `)
        this.rl.question(`\nPor favor informe o nome do serviço: `, (nomeServico) => {
            this.rl.question(`Por favor informe o valor do serviço: `, (valorServico) => {
                this.rl.question(`Por favor informe o ID do serviço: `, (idServico) => {
                    let nome = nomeServico;
                    let valor = valorServico;
                    let id = idServico;
                    let servico = new Servico(nome, valor, id);
                    this.servico.push(servico);
                    console.log(`\nCadastro concluído!`);
                    this.rl.close()
                });
            });
        });
    };
};