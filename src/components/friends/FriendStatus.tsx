import React from 'react';
import { Circle } from 'lucide-react';

interface FriendStatusProps {
  status: string;
}

export default function FriendStatus({ status }: FriendStatusProps) {
  return (
    <Circle 
      className={`absolute bottom-0 right-0 w-3 h-3 ${
        status === 'online' 
          ? 'text-green-500 fill-green-500' 
          : 'text-gray-400 fill-gray-400'
      }`} 
    />
  );
}