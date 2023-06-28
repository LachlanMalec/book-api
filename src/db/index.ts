import { Pool, QueryResultRow } from 'pg';
import { tryCatch } from 'fp-ts/TaskEither';
import { toError } from 'fp-ts/Either';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE || 'bookstore',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
});

export const query = async <T extends QueryResultRow>(text: string, params: any[]) =>
  tryCatch(() => pool.query<T>(text, params), toError);
