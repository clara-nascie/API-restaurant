import { Router } from "express";
import { ProductsController } from "../controllers/products-controller";

//criando as rotas de produtos para poder usar em outros arquivos 
const productsRoutes = Router();
//instanciando a classe ProductsController para poder usar os métodos 
const productsController = new ProductsController();

//criando a rota get para listar os produtos
productsRoutes.get("/", productsController.index);

//criando a rota post para criar um produto
productsRoutes.post("/", productsController.create);

//criando a rota put para atualizar um produto
productsRoutes.put("/:id", productsController.update);

//criando a rota delete para deletar um produto
productsRoutes.delete("/:id", productsController.remove);

//exportando as rotas de produtos para pode usar em outros arquivos
export { productsRoutes }