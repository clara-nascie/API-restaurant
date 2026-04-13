//importando os tipos de requisição e resposta do express
import { NextFunction, Request, Response } from "express";

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
}

//exportando a classe ProductsController para pode usar em outros arquivos
export { ProductsController };
