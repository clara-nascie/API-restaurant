import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";
import { z } from "zod";
import { TablesSessionsRepository } from "@/database/types/tables-sessions-repository";
import { AppError } from "@/utils/app-error";

class TablesSessionsController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            //criação do schema para validação do body 
            const bodySchema = z.object({
                table_id: z.number(),
            });

            //validação do body 
            const { table_id } = bodySchema.parse(req.body);

            //verificação se a mesa já está ocupada 
            const session = await knex<TablesSessionsRepository>('tables_sessions')
                .where({ table_id })
                .orderBy('opened_at', 'desc')
                .first();

            //se tiver sessão aberta e não tiver fechada significa que a mesa está ocupada
            if (session && !session.closed_at) {
                throw new AppError('Mesa já está ocupada', 400);
            }

            //inserção no banco de dados 
            await knex<TablesSessionsRepository>('tables_sessions').insert({
                table_id,
                opened_at: knex.fn.now() 
            });

         return res.status(201).json();
        } catch (error) {
            next(error);
        }
    }

    //listar todas as sessões abertas e fechadas 
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const sessions = await knex<TablesSessionsRepository>('tables_sessions')
            .orderBy('closed_at', 'desc')
        
            return res.json(sessions);
        } catch (error) {
            next(error);
        }
    } 

    //atualizar a sessão de mesa
    async update(req: Request, res: Response, next: NextFunction) {
    try {
        //transforma o ID em número e verifica se é um número 
        const id = z
        .string()
        .transform((value) => Number(value))
        //verifica se o ID é válido 
        .refine((value) => !isNaN(value), { message: 'ID deve ser um número' })
        //validação do body 
        .parse(req.params.id);

        return res.json();
       
    } catch (error) {
        next(error);
    }
    }
} 

export { TablesSessionsController };