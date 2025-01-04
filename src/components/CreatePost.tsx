import React, { useState } from 'react';
import { Image, Video, Smile } from 'lucide-react';

export default function CreatePost() {
  const [post, setPost] = useState('');

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <input
          type="text"
          placeholder="¿Qué estás pensando?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="flex-1 bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
          <Video className="h-6 w-6 text-red-500" />
          <span>Video en vivo</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
          <Image className="h-6 w-6 text-green-500" />
          <span>Foto/video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
          <Smile className="h-6 w-6 text-yellow-500" />
          <span>Sentimiento</span>
        </button>
      </div>
    </div>
  );
}