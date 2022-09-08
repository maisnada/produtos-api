import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.entity";

@Injectable()
export class LivrosService {

    /*   new Livro("liv01", "NestJs", 10.50),
          new Livro("liv02", "NodeJs", 123.05),
          new Livro("liv03", "OneRoster", 7.26),
          new Livro("liv04", process.env.TESTE || "aaa", 7.26) */

    private livros: Array<Livro> = [
        {
            id: 1,
            codigo: "liv01",
            nome: "NestJs",
            preco: 10.5
        },
        {
            id: 2,
            codigo: "liv02",
            nome: "NodeJs",
            preco: 123.05
        }
    ];

    obterTodos(): Array<Livro> {

        return this.livros;
    }

    obterUm(id: number): Livro {

        return this.livros[id];
    }

    criar(livro: Livro): Livro {

        this.livros.push(livro);

        livro.id = 10;

        return livro;
    }

    alterar(livro: Livro): Livro {

        return livro;
    }

    apagar(id: number): void {

        this.livros.pop();
    }

    buscarPorNome(nomeLivro: string): boolean {

        let tituloExistente: Livro[] = this.livros.filter((livro) => {

            return livro.nome === nomeLivro;
        });

        return tituloExistente.length ? true : false;

    }
}