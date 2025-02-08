"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSys = void 0;
require("dotenv/config");
exports.configSys = {
    db: {
        type: 'postgres',
        host: process.env.HOST,
        port: process.env.PORT,
        username: 'postgres',
        password: process.env.PASSWORD,
        database: 'cms_db',
        url: process.env.DATABASE_URL
    }
};
//# sourceMappingURL=parametros-de-sistema.js.map