import express from 'express';
import mysql from 'mysql';
import usersRoutes from './routes/usersRoutes';
import dietsRoutes from './routes/dietsRoutes';
import routinesRoutes from './routes/routinesRoutes';
import heightRoutes from './routes/heightRoutes';
import weightRoutes from './routes/weightRoutes';


const app = express();
const port = 3000;

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

// Middleware to parse JSON bodies
app.use(express.json());

// Register routes
app.use('/users', usersRoutes);
app.use('/diets', dietsRoutes);
app.use('/routines', routinesRoutes);
app.use('/height', heightRoutes);
app.use('/weight', weightRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;