import { Client } from 'pg';
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'product',
    password: '123456',
    port: 5432,
});
client
    .connect()
    .then(() => {
        console.log('Connect Postgre Successfully!');
    })
    .catch((error) => {
        console.log(error);
    });
    
class Database {
    async getAllList() {
        return (await client.query('select * from product')).rows;
    }
}

export default new Database();
