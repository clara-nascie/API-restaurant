import {Request, Response, NextFunction } from "express";
import { knex } from "../database/knex";
import { z } from "zod";

class OrdersController {
    async create (req: Request, res: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number().gt(0, "Quantidade deve ser maior que 0")
            });

            const { table_session_id, product_id, quantity } = bodySchema.parse(req.body);
            
            return res.status(201).json();
            
            //await knex<OrderRepository>("products").select("*")
        } catch (error) {
            next(error);
        }
    }

}

export default OrdersController;

