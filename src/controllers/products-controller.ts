//importando os tipos de requisição e resposta do express
import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import { z } from "zod";
import { productRepository } from "@/database/types/product-repository";

//criando a classe ProductsController para gerenciar os produtos
class ProductsController {
  //criando o método index para listar os produtos
  async index(req: Request, res: Response, next: NextFunction) {
    //try catch para tratar erros na requisição
    try {
      //pegando o nome do produto na query
      const {name} = req.query;
      //esperando knex para buscar os dados na tabela products
      //o await faz com que o código espere a resposta do banco de dados antes de continuar
      //o select é usado para buscar os dados na tabela products
      const products = await knex<productRepository>("products")
      .select("*")
      //filtro que procura produtos pelo nome ou pela descrição
      //%${name ?? ''}%`) o simbolo de % significa qualquer coisa
      //o ?? '' significa que se o nome for nulo, ele vai ser substituido (nullish)
      //por uma string vazia, mostrando todos os produtos
      .whereLike("name", `%${name ?? ''}%`)
      .orderBy("name");
      
      //retornando os produtos em json
      return res.json(products);
      //mostrando o erro caso ocorra na requisição
    } catch (error) {
      next(error);
    }
  }

  //criando o método create para criar um produto
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      //criando o schema de validação do body para validar os dados que vem na requisição
      // o schema serve para garantir que os dados que vem na requisição estejam corretos
      //o z.object é usado para falar que o tipo de dado vai ser uma string ou um número
      const bodySchema = z.object({
        name: z.string().trim().min(6, "nome deve ter pelo menos 6 caracteres"),
        price: z.number().gt(0, "preço deve ser maior que 0"),
      });

      //usando o schema para validar os dados que vem na requisição
      const { name, price } = bodySchema.parse(req.body);

      //esperando knex para inserir os dados na tabela products
      //o await faz com que o código espere a resposta do banco de dados antes de continuar
      //o insert é usado para inserir os dados na tabela products
      //importando o tipo productRepository para tipar o knex
      await knex<productRepository>("products").insert({
        name,
        price,
      });

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  //criando o método update para atualizar um produto
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z.string().transform((value) => Number(value)).refine((value) => !isNaN
      (value), {message: "o ID deve ser um número"}).parse(req.params.id)
      return res.status(200).json({ message: "Atualizado!"});
    } catch (error) {
      next(error);
    }
  }
}

//exportando a classe ProductsController para pode usar em outros arquivos
export { ProductsController };
