import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeLivroUnico } from './is-nome-livro-unico.validator';

export class Livro {

    @Exclude({
        toPlainOnly: true
    })
    id: number;
    codigo: string;

    @IsNotEmpty({
        message: 'nome é obrigatório'
    })
    @IsString({
        message: 'nome deve ser texto'
    })
    @IsNomeDeLivroUnico({
        message: 'nome do livro deve ser único'
    })
    nome: string;
    preco: number;

    constructor(codigo: string, nome: string, preco: number) {

        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}
