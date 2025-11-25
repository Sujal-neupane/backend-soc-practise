import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

// Mount routes under /api
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});