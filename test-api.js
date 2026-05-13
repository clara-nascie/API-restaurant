fetch('http://localhost:3333/tables-sessions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ table_id: 1 })
}).then(res => console.log('STATUS:', res.status, res.statusText)).catch(console.error);
