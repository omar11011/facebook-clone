import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { getUserById } from '../utils/dataUtils';

interface PostProps {
  id: number;
  userId: number;
  content: string;
  image?: string;
  time: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Post({ userId, content, image, time, likes, comments, shares }: PostProps) {
  const user = getUserById(userId);

  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src={user?.avatar} 
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{user?.name}</h3>
              <p className="text-gray-500 text-sm">{time}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        
        <p className="mb-4">{content}</p>
        
        {image && (
          <img 
            src={image} 
            alt="Post content" 
            className="w-full rounded-lg mb-4 object-cover max-h-[500px]" 
          />
        )}
        
        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <span>{likes} Me gusta</span>
          <span>{comments} comentarios</span>
          <span>{shares} compartidos</span>
        </div>
        
        <hr className="mb-4" />
        
        <div className="flex justify-between">
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1">
            <ThumbsUp className="h-5 w-5" />
            <span>Me gusta</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1">
            <MessageCircle className="h-5 w-5" />
            <span>Comentar</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1">
            <Share2 className="h-5 w-5" />
            <span>Compartir</span>
          </button>
        </div>
      </div>
    </div>
  );
}