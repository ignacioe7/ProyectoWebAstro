import { getAuthLocalStorage, setAuthLocalStorage } from './localstorage';

export const authLogin = async (username: string, password: string) => {
  try {
    const response = await fetch(`http://localhost:4500/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
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
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await fetch(`http://localhost:4500/auth/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email }),
  });
  const data = await response.json();
  return data;
};

export const fetchApi = async (
  ruta: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
) => {
  const auth = getAuthLocalStorage();
  if (!auth) {
    const response = await fetch(`http://localhost:4500${ruta}`, {
      method,
    });
    const data = await response.json();
    return data.data;
  }
  const date = new Date(auth.token.expiresOn);
  if (date < new Date()) throw new Error('Token expirado');
  const response = await fetch(`http://localhost:4500${ruta}`, {
    method,
    headers: {
      Authorization: `Bearer ${auth.token.token}`,
    },
  });
  const data = await response.json();
  return data.data;
};
