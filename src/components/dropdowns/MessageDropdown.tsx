import React from 'react';
import messages from '../../data/messages.json';
import { enrichMessage } from '../../utils/dataUtils';

export default function MessageDropdown() {
  const enrichedMessages = messages.messages.map(enrichMessage);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
      <h3 className="px-4 py-2 text-lg font-semibold">Mensajes</h3>
      <div className="max-h-96 overflow-y-auto">
        {enrichedMessages.map((message) => (
          <div 
            key={message.id}
            className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${
              message.unread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={message.avatar} 
                alt={message.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold">{message.sender}</p>
                <p className="text-sm text-gray-600">{message.content}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}