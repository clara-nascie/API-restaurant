import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

//criando as rotas principais
const routes = Router();

//usando as rotas de produtos
routes.use("/products", productsRoutes);

//usando as rotas de mesas
routes.use("/tables", tablesRoutes);

//usando as rotas de sessões de mesas
routes.use("/tables-sessions", tablesSessionsRoutes);

//usando as rotas de pedidos
routes.use("/orders", ordersRoutes);

//exportando as rotas principais para pode usar em outros arquivos
export { routes };