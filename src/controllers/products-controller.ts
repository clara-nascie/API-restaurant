//importando os tipos de requisição e resposta do express
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

//criando a classe ProductsController para gerenciar os produtos
class ProductsController {
  //criando o método index para listar os produtos
  async index(req: Request, res: Response, next: NextFunction) {
    //try catch para tratar erros na requisição
    try {
      //retornando os produtos em json 
      return res.json({
        message: "Produto cadastrado",
      });
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
      //o z.objct é usado para falar que o tipo de dado vai ser uma string ou um número
      const bodySchema = z.object({
        name: z.string().trim().min(6, "nome deve ter pelo menos 6 caracteres"),
        price: z.number().gt(0, "preço deve ser maior que 0"),
      });

//usando o schema para validar os dados que vem na requisição 
      const { name, price } = bodySchema.parse(req.body);

      return res.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

//exportando a classe ProductsController para pode usar em outros arquivos
export { ProductsController };
