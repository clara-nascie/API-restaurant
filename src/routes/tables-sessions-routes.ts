import { Router } from "express";
import { TablesSessionsController } from "@/controllers/tables-sessions-controller";

const tablesSessionsRoutes = Router();
const tablesSessionsController = new TablesSessionsController();

//cria uma nova sessão de mesa no banco de dados 
tablesSessionsRoutes.post("/", tablesSessionsController.create);

//lista todas as sessões abertas e fechadas 
tablesSessionsRoutes.get("/", tablesSessionsController.index);

//encerra a sessão de mesa pelo id 
tablesSessionsRoutes.patch("/:id", tablesSessionsController.update);

export { tablesSessionsRoutes };