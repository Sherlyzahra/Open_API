import http from 'http';
import mysql from 'mysql2';

const db = mysql.createConnection ({ host: "localhost", user: "root", database: "openapi", password: ""});

const server = http.createServerServer((req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': "text/plain"});
            res.end('Internal Server Error');
            return;
        }

        reswriteHead(200, { 'Content-Type': "apllication/json" });
        res.end(JSON.stringify(results));
    });
    });
    server.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));
