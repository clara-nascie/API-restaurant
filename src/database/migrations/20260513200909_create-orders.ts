import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('orders', (table) => {
        //coluna id que sera incrementada automaticamente
        table.increments('id').primary();

        //coluna table_session_id que sera referenciada pela tabela tables_sessions
        table.integer('table_session_id')
        .notNullable()
        .references('id')
        .inTable('tables_sessions');

        //coluna product_id que sera referenciada pela tabela products
        table.integer('product_id')
        .notNullable()
        .references('id')
        .inTable('products');

        //coluna quantity que sera referenciada pela tabela orders
        table.integer('quantity').notNullable();
        //coluna price que sera referenciada pela tabela orders
        table.decimal('price').notNullable();

        //coluna created_at que sera referenciada pela tabela orders
        table.dateTime('created_at').defaultTo(knex.fn.now());
        //coluna updated_at que sera referenciada pela tabela orders
        table.dateTime('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('orders')
}

