import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Livro } from './livro.entity';
import { LivrosService } from './livro.service';

@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivrosService) { }

    @Get()
    obterTodos(): Livro[] {
        return this.livrosService.obterTodos();
    }

    /*   @Get(':id')
      obterUm(@Param() params): Livro {
  
          return this.livrosService.obterUm(params.id);
  
      } */

    @Get(':id')
    obterUm(@Param('id') idLivro: number): Livro {

        return this.livrosService.obterUm(idLivro);
    }

    /* @Get(':buscarPorNome')
    buscarPorNome(@Param('buscarPorNome') nome: string): boolean {

        return this.livrosService.buscarPorNome(nome);
    } */

    @Post()
    criar(@Body() livro: Livro): Livro {

        let livroRetornado: Livro = this.livrosService.criar(livro);

        return livroRetornado;
    }

    @Put()
    alterar(@Body() livro: Livro): Livro {

        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params): void {

        this.livrosService.apagar(params.id);
    }
}
