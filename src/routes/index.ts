import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";

//criando as rotas principais
const routes = Router();

//usando as rotas de produtos
routes.use("/products", productsRoutes);

//usando as rotas de mesas
routes.use("/tables", tablesRoutes);

//exportando as rotas principais para pode usar em outros arquivos
export { routes };