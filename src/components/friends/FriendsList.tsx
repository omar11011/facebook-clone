import React from 'react';
import FriendItem from './FriendItem';
import users from '../../data/users.json';

export default function FriendsList() {
  const onlineUsers = users.users.filter(user => user.status === 'online');
  const offlineUsers = users.users.filter(user => user.status === 'offline');

  return (
    <div className="hidden lg:block w-80 fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="font-semibold text-gray-500 mb-4">Contactos</h2>
      
      <div className="space-y-2">
        {/* Usuarios en línea */}
        <div className="mb-4">
          <h3 className="text-sm text-gray-500 mb-2">En línea ({onlineUsers.length})</h3>
          {onlineUsers.map((user) => (
            <FriendItem
              key={user.id}
              name={user.name}
              avatar={user.avatar}
              status={user.status}
            />
          ))}
        </div>

        {/* Usuarios desconectados */}
        <div>
          <h3 className="text-sm text-gray-500 mb-2">Desconectados ({offlineUsers.length})</h3>
          {offlineUsers.map((user) => (
            <FriendItem
              key={user.id}
              name={user.name}
              avatar={user.avatar}
              status={user.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}