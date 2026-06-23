import express from 'express';
import connectDB from './config/db.js';

import dotenv from 'dotenv';
import task from './models/task.js';
dotenv.config();
const port = process.env.PORT || 8080;
const server = express();

connectDB();
server.use(express.json());

server.get('/', (req, res) => {
  res.json('server is runing cicd addedd finally boom cick done');
});
server.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

server.post('/add', async (req, res) => {
  const { title } = req.body;
  const obj = await task.create(req.body);
  return res.status(201).json({
    success: true,
    data: task,
    message: 'Task created successfully test',
  });
});

server.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
