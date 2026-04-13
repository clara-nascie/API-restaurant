import { Router } from "express";
import { productsRoutes } from "./products-routes";

//criando as rotas principais
const routes = Router();

//usando as rotas de produtos
routes.use("/products", productsRoutes);

//exportando as rotas principais para pode usar em outros arquivos
export { routes };