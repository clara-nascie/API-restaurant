//importando os tipos de requisição e resposta do express
import { NextFunction, Request, Response } from "express";

//criando a classe AppError para tratar erros na aplicação
class AppError {
    message: string 
    statusCode: number
    
    //usando o construtor para receber a mensagem de erro 
    constructor(message: string, statusCode: number = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

//exportando a classe AppError para pode usar em outros arquivos
export { AppError };