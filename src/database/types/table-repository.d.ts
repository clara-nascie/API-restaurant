type TableRepository = {
    id: number;
    table_number: number;
    status: 'available' | 'occupied';
    created_at: number;
    updated_at: number;
}

export { TableRepository };