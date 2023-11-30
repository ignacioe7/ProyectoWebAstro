import { getAuthLocalStorage, setAuthLocalStorage } from './localstorage';

export const authLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`http://localhost:3000/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    setAuthLocalStorage(data);
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const authRegistro = async ({
  firstName,
  lastName,
  email,
  rut,
  dateOfBirth,
  password,
  id_diet,
  id_routine,
  id_city
}: {
  firstName: string;
  lastName: string;
  email: string;
  rut: string;
  dateOfBirth: Date;
  password: string;
  id_diet: number;
  id_routine: number;
  id_city: number;
}) => {
  try {
    const response = await fetch(`http://localhost:3000/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, rut, dateOfBirth, password, id_diet, id_routine, id_city }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const fetchApi = async (
  ruta: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
) => {
  const auth = getAuthLocalStorage();
  if (!auth) {
    const response = await fetch(`http://localhost:3000${ruta}`, {
      method,
    });
    const data = await response.json();
    return data.data;
  }
  const date = new Date(auth.token.expiresOn);
  if (date < new Date()) throw new Error('Token expirado');
  const response = await fetch(`http://localhost:3000${ruta}`, {
    method,
    headers: {
      Authorization: `Bearer ${auth.token.token}`,
    },
  });
  const data = await response.json();
  return data.data;
};
