import React, { useState } from 'react';
import { Home, Bell, MessageCircle, Search, Menu, User } from 'lucide-react';
import MessageDropdown from './dropdowns/MessageDropdown';
import NotificationDropdown from './dropdowns/NotificationDropdown';

export default function Navbar() {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              onClick={handleHomeClick}
              className="text-blue-600 text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            >
              facebook
            </span>
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="Buscar en Facebook"
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex space-x-8">
            <Home 
              onClick={handleHomeClick}
              className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" 
            />
            <div className="relative">
              <MessageCircle 
                onClick={() => {
                  setShowMessages(!showMessages);
                  setShowNotifications(false);
                }}
                className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" 
              />
              {showMessages && <MessageDropdown />}
            </div>
            <div className="relative">
              <Bell 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowMessages(false);
                }}
                className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" 
              />
              {showNotifications && <NotificationDropdown />}
            </div>
            <Menu className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}