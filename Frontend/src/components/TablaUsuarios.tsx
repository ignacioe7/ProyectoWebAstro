import React, { useEffect, useState } from 'react';

function TablaUsuarios() {
  const [usuarios, setUsers] = useState<{ id_user: number, firstName: string, email: string }[]>([
    { id_user: 1, firstName: 'Prueba', email: 'prueba@example.com' },
    // Agrega aquí más usuarios de prueba si necesitas
  ]);
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          {/* Agrega aquí más columnas si necesitas */}
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id_user}>
            <td>{usuario.id_user}</td>
            <td>{usuario.firstName}</td>
            <td>{usuario.email}</td>
            {/* Agrega aquí más celdas si necesitas */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaUsuarios;
