import { query } from '../db';
import { Future } from 'funfix-exec';
import { Option } from 'funfix-core';
export type Book = {
  id: number;
  title: string;
  author: string;
};

export const findAll = (): Future<Book[]> =>
  query<Book>('SELECT * FROM books').map(res => res.rows);

export const findById = (id: number): Future<Option<Book>> =>
  query<Book>('SELECT * FROM books WHERE id = $1', [id]).map(res => Option.of(res.rows[0]) || Option.none());
