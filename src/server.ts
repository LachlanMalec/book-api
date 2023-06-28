import express from 'express';
import bookRoutes from './routes/books';

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
