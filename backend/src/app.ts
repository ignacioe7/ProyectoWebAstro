import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import usersRoutes from './routes/usersRoutes';
import dietsRoutes from './routes/dietsRoutes';
import routinesRoutes from './routes/routinesRoutes';
import heightRoutes from './routes/heightRoutes';
import weightRoutes from './routes/weightRoutes';


const app = express();
const port = 3000;


app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cboom'
});

db.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
});


app.use(express.json());


app.use('/users', usersRoutes);
app.use('/diets', dietsRoutes);
app.use('/routines', routinesRoutes);
app.use('/height', heightRoutes);
app.use('/weight', weightRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});