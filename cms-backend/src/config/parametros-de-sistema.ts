import 'dotenv/config';

export const configSys = {
    db: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        url: process.env.DATABASE_URL
    }
}