import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from "../db";

// Fetch all users
export const getUsers = (
  request: express.Request,
  response: express.Response
) => {
  const query = `
  SELECT users.firstName, users.lastName, users.email, users.rut, users.role, DATE_FORMAT(users.dateOfBirth, '%d-%m-%Y') AS dateOfBirth, diets.name AS diet_name, routines.name AS routine_name, cities.name AS city_name
    FROM users
    LEFT JOIN diets ON users.id_diet = diets.id_diet
    LEFT JOIN routines ON users.id_routine = routines.id_routine 
    LEFT JOIN cities ON users.id_city = cities.id_city
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(200).json(results);
  });
};

// Fetch a single user by id
export const getUser = (
  request: express.Request,
  response: express.Response
) => {
  const query = `
    SELECT users.firstName, users.lastName, users.email, users.rut, DATE_FORMAT(users.dateOfBirth, '%d-%m-%Y') AS dateOfBirth, diets.name AS diet_name, routines.name AS routine_name, cities.name AS city_name
    FROM users
    LEFT JOIN diets ON users.id_diet = diets.id_diet
    LEFT JOIN routines ON users.id_routine = routines.id_routine
    LEFT JOIN cities ON users.id_city = cities.id_city
    WHERE id_user = ?
  `;
  db.query(query, [request.params.id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.send(results);
  });
};

export const registerUser = async ( 
  request: express.Request,
  response: express.Response) => {

  const userData = request.body;

  // Encriptar la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  // Crear el usuario
  const user = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    rut: userData.rut,
    dateOfBirth: userData.dateOfBirth,
    password: hashedPassword,
    id_diet: userData.id_diet,
    id_routine: userData.id_routine,
    id_city: userData.id_city,
    role: "normal"
  };

  const query = 'INSERT INTO users SET ?';

  db.query(query, user, (err, result) => {
    if (err) throw err;
    console.log('User inserted.');
    return response.status(201).json({ message: 'Usuario registrado con éxito' });
  });
};

// Add a new user
export const addUser = (
  request: express.Request,
  response: express.Response
) => {
  db.query("INSERT INTO users SET ?", request.body, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      response.status(500).json({ error: "Internal server error" });
      return;
    }
    response.status(201).send(`User added with ID: ${results.insertId}`);
  });
};

// Update an existing user
export const updateUser = async(
  request: express.Request,
  response: express.Response
) => {

  const userData = request.body;

  // Encriptar la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  const user = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    rut: userData.rut,
    dateOfBirth: userData.dateOfBirth,
    password: hashedPassword,
    id_diet: userData.id_diet,
    id_routine: userData.id_routine,
    id_city: userData.id_city,
  };

  db.query(
    "UPDATE users SET ? WHERE id_user = ?",
    [user, request.params.id],
    (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ error: "Internal server error" });
        return;
      }
      response.send("User updated successfully.");
    }
  );
};

// Delete a user
export const deleteUser = (
  request: express.Request,
  response: express.Response
) => {
  db.query(
    "DELETE FROM users WHERE id_user = ?",
    [request.params.id],
    (error, results) => {
      if (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ error: "Internal server error" });
        return;
      }
      response.send("User deleted successfully.");
    }
  );
};

// Stats of user
export const getYearlyStats = (
  request: express.Request,
  response: express.Response
) => {
  const userId = request.params.id;
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  let lastIMC: number | null = null;
  let lastWeight: number | null = null;
  type StatsData = {
    id_user: string;
    averageWeight: number;
    imc: number;
    month: string;
    year: number;
  };

  const statsData: StatsData[] = [];

  function calculateIMC(weight: number, height: number): number {
    const heightInMeters = height;
    return weight / (heightInMeters * heightInMeters);
  }

  for (let i = 0; i < 12; i++) {
    const month = ((currentMonth - i - 1 + 12) % 12) + 1;
    const year = currentMonth - i - 1 < 0 ? currentYear - 1 : currentYear;

    const weightQuery =
      "SELECT AVG(weight) as averageWeight FROM weight WHERE id_user = ? AND MONTH(date) = ? AND YEAR(date) = ?";

    const heightQuery =
      "SELECT height FROM height WHERE id_user = ? AND date <= LAST_DAY(?) ORDER BY date DESC LIMIT 1";

    db.query(weightQuery, [userId, month, year], (error, weightResults) => {
      if (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ error: "Internal server error" });
        return;
      }

      db.query(
        heightQuery,
        [userId, new Date(year, month - 1)],
        (error, heightResults) => {
          if (error) {
            console.error("Error executing query:", error);
            response.status(500).json({ error: "Internal server error" });
            return;
          }

          // Calcula el peso medio
          let averageWeight: number | null = null;
          if (weightResults[0].averageWeight) {
            averageWeight = parseFloat(weightResults[0].averageWeight.toFixed(2));
            lastWeight = averageWeight;
          } else if (lastWeight) {
            averageWeight = lastWeight;
          } else {
            averageWeight = 0;
          }

          // Calcula el IMC
          let imc: number | null = null;
          if (weightResults[0].averageWeight && heightResults[0].height) {
            imc = calculateIMC(
              weightResults[0].averageWeight,
              heightResults[0].height
            );
            imc = parseFloat(imc.toFixed(2)); // Aquí limitamos el IMC a dos dígitos después de la coma
            lastIMC = imc;
          } else if (lastIMC) {
            imc = lastIMC;
          }

          // Añade un objeto con el promedio del peso, el IMC y el mes a la lista de datos de estadísticas
          statsData.push({
            id_user: userId,
            averageWeight: averageWeight ?? 0,
            imc: imc ?? 0,
            month: monthNames[month - 1],
            year: year,
          });

          // Si hemos terminado de recoger los datos de los 12 meses, envía la respuesta
          if (statsData.length === 12) {
            statsData.reverse();
            response.status(200).json(statsData);
          }
        }
      );
    });
  }
};

export const loginUser = async (
  request: express.Request,
  response: express.Response
) => {

  const userData= request.body;

  const { email, password } = userData;

  const user = {
    email: userData.email,
    password: userData.password,
  };

  const query = 'SELECT id_user, firstName, role, password FROM users WHERE email = ?';

 db.query(query, [user.email], async (err, results) => {
  if (err) throw err;

  if (results.length > 0) {
    const user = results[0];

    const isValidPassword = await bcrypt.compare(password , user.password);

    if (!isValidPassword) {
      return response.status(400).json({ message: 'Email o contraseña incorrectos' });
    }

    const token = jwt.sign({ id: user.id_user }, 'your-secret-key', { expiresIn: '1h' });

    return response.json({
      token,
      user: {
        id_user: user.id_user,
        firstName: user.firstName,
        role: user.role
      }
    });
  } else {
    return response.status(400).json({ message: 'Usuario no encontrado' });
  }
});

};