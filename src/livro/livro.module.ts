import { Module } from "@nestjs/common";
import { IsNomeDeLivroUnicoConstraint } from "./is-nome-livro-unico.validator";
import { LivrosController } from "./livro.controller";
import { LivrosService } from "./livro.service";

@Module({
    controllers: [LivrosController],
    providers: [LivrosService, IsNomeDeLivroUnicoConstraint]
})

export class LivroModule { }