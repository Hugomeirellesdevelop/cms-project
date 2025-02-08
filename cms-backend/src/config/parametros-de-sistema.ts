import 'dotenv/config';

export const configSys = {
    db: {
        type: 'postgres',
        host: process.env.HOST,
        port: process.env.PORT,
        username: 'postgres',
        password: process.env.PASSWORD,
        database: 'cms_db',
        url: process.env.DATABASE_URL
    }
}