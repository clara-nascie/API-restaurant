//esse arquivo serve para definir as colunas da tabela 
// no futuro pode ser interessante mudar para um banco de dados como o supabase 
//que é mais seguro e robusto, alem de ter mais funcionalidades
//mas por enquanto vamos usar o knex

type TablesSessionsRepository = {
    id: number;
    table_id: number;
    opened_at: number;  
    closed_at: number;  //data e hora atual
}

export { TablesSessionsRepository };
