import React from 'react';
import { Facebook } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
      <div className="text-center">
        <Facebook className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
        <div className="mt-4 bg-white rounded-lg shadow p-4">
          <div className="h-4 bg-gray-200 rounded w-32 mb-3 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}