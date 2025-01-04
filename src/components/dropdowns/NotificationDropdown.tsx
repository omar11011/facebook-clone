import React from 'react';
import notifications from '../../data/notifications.json';
import { enrichNotification } from '../../utils/dataUtils';

export default function NotificationDropdown() {
  const enrichedNotifications = notifications.notifications.map(enrichNotification);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
      <h3 className="px-4 py-2 text-lg font-semibold">Notificaciones</h3>
      <div className="max-h-96 overflow-y-auto">
        {enrichedNotifications.map((notification) => (
          <div 
            key={notification.id}
            className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${
              notification.unread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={notification.avatar} 
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.description}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}