export default {
    client: 'sqlite3',
    connection: {
        //endereço de onde vai estar o banco de dados
        filename: './src/database/db.sqlite'
    },

    pool: {
        //configurações do pool
        // o pool é usado para gerenciar as conexões com o banco de dados
        // o afterCreate é usado para configurar a conexão com o banco de dados
        // o PRAGMA foreign_keys = ON; é usado para habilitar as chaves estrangeiras
        // isso é necessário para que o knex possa criar tabelas com chaves estrangeiras
        afterCreate: (conn: any, done: any) => {
            conn.run("PRAGMA foreign_keys = ON;", done);
        }
    },

    //configurações do knex 
    useNullAsDefault: true,
    // usando arquivos .ts para as migrações
    // as migrações são usadas para criar e atualizar tabelas no banco de dados
    migrations: {
        extension: 'ts',
        directory: './src/database/migrations'
    },

    seeds: {
        //usando arquivos .ts para as seeds
        // as seeds são usadas para popular o banco de dados com dados iniciais
        extension: 'ts',
        directory: './src/database/seeds'
    }
}
