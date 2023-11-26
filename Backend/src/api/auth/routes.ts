import express from 'express';

import authControllers from './controllers';

const authRoutes = express.Router();

authRoutes.post('/registro', authControllers.crearCuenta);
authRoutes.post('/login', authControllers.iniciarSesion);

export default authRoutes;
