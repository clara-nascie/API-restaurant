import { Router } from "express";
import OrdersController from "@/controllers/orders-controller";

//a const ordresRouter é = a router porque ela vai ser a
//rota principal, o resto das rotas vai ser prefixos
//o que significa que as rotas vão ser /api/v1/orders/create, por exemplo
//e não /api/v1/create, /api/v1/delete, etc...
const ordersRoutes = Router();

//instanciando o controller
const ordersController = new OrdersController();

//criando a rota para os pedidos
ordersRoutes.post("/", ordersController.create);

//criando a rota para listar os pedidos
ordersRoutes.get("/table-session/:table_session_id", ordersController.index);

export {ordersRoutes}