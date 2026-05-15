import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/app-error";
import { knex } from "@/database/knex";
import { z } from "zod";
import { TablesSessionsRepository } from "@/database/types/tables-sessions-repository";
import { OrderRepository } from "@/database/types/order-repository";
import { productRepository } from "@/database/types/product-repository";

class OrdersController {
    async create (req: Request, res: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number().gt(0, "Quantidade deve ser maior que 0")
            });

            const { table_session_id, product_id, quantity } = bodySchema.parse(req.body);

            const session = await knex<TablesSessionsRepository>("tables_sessions")
            .where({id: table_session_id})
            .first();
            
            if (!session) {
                throw new AppError("Sessão não encontrada", 404);
            }

            if(session.closed_at){
                throw new AppError("Sessão encerrada", 400);
            }
            
            const product = await knex<productRepository>("products")
            .where({id: product_id})
            .first();
            
            if (!product) {
                throw new AppError("Produto não encontrado", 404);
            }

            await knex<OrderRepository>("orders")
            .insert({
                table_session_id,
                product_id,
                quantity,
                price: product.price
            });


            return res.status(201).json();


            
        } catch (error) {
            next(error);
        }
    }

    async index (req: Request, res: Response, next: NextFunction) {
        try {

            const {table_session_id} = req.params;

            const order = await knex("orders")
            //tabela mais coluna para que nao gere erro de ambiguidade com other tables
            .select("orders.id", 
            "orders.table_session_id", 
            "orders.product_id",
            "products.name",
            "orders.quantity",
            "products.price")

            .join("products", "products.id", "orders.product_id")

            .where({table_session_id});

            return res.json(order);

        } catch (error) {
            next(error);
        }
    }
}

export default OrdersController;

