import express from 'express';
import { findAll, findById } from '../models/book';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const books = await findAll().toPromise();
  res.json(books);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const book = await findById(parseInt(req.params.id, 10)).toPromise();

  if (book.isEmpty()) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
}));

export default router;
