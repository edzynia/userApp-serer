import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app: Application = express();

// Middleware for json processing
app.use(express.json());

app.use(cors());

// Connection of API routes
app.use('/api/users', userRoutes);

app.use('/api/auth', authRoutes);

// Middleware for server side rendering
app.use(express.static(path.join(__dirname, 'public')));

// All routes processing not related to API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app; //app export
