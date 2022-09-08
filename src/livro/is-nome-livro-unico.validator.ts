import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { LivrosService } from './livro.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsNomeDeLivroUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private livroService: LivrosService) { }

    validate(nomeLivro: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !this.livroService.buscarPorNome(nomeLivro);
    }
}

export function IsNomeDeLivroUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeLivroUnicoConstraint,
        });
    }; ''
}