import users from '../data/users.json';
import posts from '../data/posts.json';
import messages from '../data/messages.json';
import notifications from '../data/notifications.json';

export const getUserById = (id: number) => {
  return users.users.find(user => user.id === id);
};

export const getPostById = (id: number) => {
  return posts.posts.find(post => post.id === id);
};

export const enrichMessage = (message: typeof messages.messages[0]) => {
  const sender = getUserById(message.senderId);
  return {
    ...message,
    sender: sender?.name,
    avatar: sender?.avatar
  };
};

export const enrichNotification = (notification: typeof notifications.notifications[0]) => {
  const user = getUserById(notification.userId);
  const post = notification.postId ? getPostById(notification.postId) : null;
  
  let title = '';
  let description = '';

  switch (notification.type) {
    case 'like':
      title = `A ${user?.name} le gustó tu publicación`;
      description = post?.content || '';
      break;
    case 'comment':
      title = `${user?.name} comentó en tu publicación`;
      description = notification.content || '';
      break;
    case 'friend':
      title = 'Nueva solicitud de amistad';
      description = `${user?.name} quiere ser tu amigo`;
      break;
  }

  return {
    ...notification,
    title,
    description,
    avatar: user?.avatar
  };
};