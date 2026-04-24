import type { Knex } from "knex";

//criando o migrations para a tabela de mesas

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tables', (table) => {
        //colunas da tabela 
        table.increments('id').primary();
        table.integer("table_number").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('tables');
}

