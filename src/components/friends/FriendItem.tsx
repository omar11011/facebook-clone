import React from 'react';
import FriendStatus from './FriendStatus';

interface FriendItemProps {
  name: string;
  avatar: string;
  status: string;
}

export default function FriendItem({ name, avatar, status }: FriendItemProps) {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div className="relative">
        <img 
          src={avatar} 
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <FriendStatus status={status} />
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
}