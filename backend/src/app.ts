import express from 'express';
import mysql from 'mysql';
import usersRoutes from './routes/usersRoutes';
import dietsRoutes from './routes/dietsRoutes';
import routinesRoutes from './routes/routinesRoutes';

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
  console.log('Successfully connected to the database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Register routes
app.use('/users', usersRoutes);
app.use('/diets', dietsRoutes);
app.use('/routines', routinesRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;