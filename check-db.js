const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./src/database/db.sqlite');
db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
    console.log(err || rows);
});
db.close();
