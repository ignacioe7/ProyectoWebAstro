import React from 'react';

interface Usuario {
  id: number;
  nombre: string;
}

interface TablaUsuariosProps {
  usuarios: Usuario[];
}

const TablaUsuarios: React.FC<TablaUsuariosProps> = ({ usuarios }) => {
  return (
    <table className='text-white'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaUsuarios;
