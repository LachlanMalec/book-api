import { Pool, QueryResult, QueryResultRow } from 'pg';
import { Future } from 'funfix-exec';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE || 'bookstore',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
});

export const query = <T extends QueryResultRow>(text: string, params?: any[]): Future<QueryResult<T>> => 
  Future.fromPromise(pool.query<T>(text, params));
