"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
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
    getAllList() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield client.query('select * from product')).rows;
        });
    }
}
exports.default = new Database();
