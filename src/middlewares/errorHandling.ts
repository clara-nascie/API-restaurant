import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error";

//criando a função de tratamento de erros
export function errorHandling (error: any, req: Request, res: Response, next: NextFunction) {
    // identificar se o erro é uma instância de AppError, ou seja, um erro interno
    if (error instanceof AppError) {
        //retornando o erro com o status code e a mensagem
        return res.status(error.statusCode).json({
            message: error.message,
            statusCode: error.statusCode
        });
    }
    //retornando o erro com o status code 500 e a mensagem caso seja um erro externo, ou seja do cliente
    return res.status(500).json({
        message: "Internal server error"
    });
}