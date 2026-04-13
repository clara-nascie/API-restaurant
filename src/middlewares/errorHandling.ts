import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { ZodError } from "zod";

//criando a função de tratamento de erros
export function errorHandling (
    error: any, 
    req: Request,
    res: Response,
    next: NextFunction
) {
    // identificar se o erro é uma instância de AppError, ou seja, um erro interno
    if (error instanceof AppError) {
        //retornando o erro com o status code e a mensagem
        return res.status(error.statusCode).json({
            message: error.message,
            statusCode: error.statusCode
        });
    }

    //identificar se o erro é uma instância de ZodError, ou seja, um erro de validação
    if (error instanceof ZodError) {
        //retornando o erro com o status code e a mensagem
        return res.status(400).json({
            message: "Erro de validação", issues: error.format(),
            statusCode: 400
        });
    }
    //retornando o erro com o status code 500 e a mensagem caso seja um erro externo, ou seja do cliente
    return res.status(500).json({
        message: "Internal server error"
    });
}
