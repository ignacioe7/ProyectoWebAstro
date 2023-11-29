import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id_user: number;
  firstName: string;
  lastName: string;
  email: string;
};

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId: number) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      const updatedUsers = users.filter(user => user.id_user !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">ID</th>
          <th className="py-3 px-6 text-left">Nombre</th>
          <th className="py-3 px-6 text-left">Apellido</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody className="text-white text-sm font-light">
        {users.map((user: any) => (
          <tr key={user.id_user} className="border-b border-gray-200 hover:bg-gray-400">
            <td className="py-3 px-6 text-left">{user.id_user}</td>
            <td className="py-3 px-6 text-left">{user.firstName}</td>
            <td className="py-3 px-6 text-left">{user.lastName}</td>
            <td className="py-3 px-6 text-left">{user.email}</td>
            <td className="py-3 px-6 text-center">
              <button onClick={() => deleteUser(user.id_user)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;