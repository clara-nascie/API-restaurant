import {knex as KnexConfig} from "knex";
import config from "../../knexfile";

//exportando a conexão com o banco de dados
export const knex = KnexConfig(config);
