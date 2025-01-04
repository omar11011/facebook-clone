import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import LoadingScreen from './components/LoadingScreen';
import FriendsList from './components/friends/FriendsList';
import posts from './data/posts.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto pt-20 px-4">
        <CreatePost />
        {posts.posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <FriendsList />
    </div>
  );
}

export default App;