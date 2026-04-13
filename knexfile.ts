export default {
    client: 'sqlite3',
    connection: {
        //endereço de onde vai estar o banco de dados
        filename: './src/database/db.sqlite'
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
