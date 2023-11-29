import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.TOKEN ?? 'secretkey';

export interface CustomRequest extends Request {
  token: {id_user: number; firstName: string; role: string };
}

function authGuard(req: Request, res: Response, next: NextFunction): void {
  if (!req.header('authorization')) {
    res.status(401).send({
      message: 'Error: No se ha recibido el token de autenticación',
    });
    return;
  }
  
  const token = req.header('authorization').replace('Bearer ', '');
  try {
    const decoded: {id_user: number; firstName: string; role: string } = jwt.verify(
      token,
      SECRET_KEY,
    ) as {id_user: number; firstName: string; role: string };
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      message: 'Error: Token de autenticación inválido',
    });
    return;
  }
}

function adminGuard(req: Request, res: Response, next: NextFunction): void {
  const token = (req as CustomRequest).token;

  if (token.role !== 'admin') {
    res.status(403).send({
      message: 'Error: No tienes permisos de administrador',
    });
    return;
  }
  next();
}

function mismoUserGuard(req: Request, res: Response, next: NextFunction): void {
  const { id_user } = req.params;
  const token = (req as CustomRequest).token;
  if (token.role !== 'admin' && token.id_user !== Number(id_user)) {
    res.status(403).send({
      message: 'Error: No tienes permisos para acceder a este recurso',
    });
    return;
  }
  next();
}

function authenticated(req: Request, res: Response, next: NextFunction) {
  if (req.header('authorization')) {
    const token = req.header('authorization').replace('Bearer ', '');
    try {
      const decoded: {id_user: number; firstName: string; role: string } = jwt.verify(
        token,
        SECRET_KEY,
      ) as {id_user: number; firstName: string; role: string };
      (req as CustomRequest).token = decoded;
    } catch (error) {
      console.error(error);
    }
  }
  next();
}

export default {
  authGuard,
  adminGuard,
  mismoUserGuard,
  authenticated,
};
