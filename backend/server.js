import express from 'express';
import 'dotenv/config.js';
import {
  getAllData,
  getDataById,
  createNewData,
  deleteData,
  updateData,
} from './controllers/controllers.js';

const app = express();

app.use(express.json());

app.get('/', getAllData);

app.get('/:id', getDataById);

app.post('/post', createNewData);

app.delete('/delete/:id', deleteData);

app.patch('/patch', updateData);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on ${process.env.SERVER_PORT}`);
});
