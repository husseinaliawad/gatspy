import React from 'react';
import Post from '../components/Post';

const Feed: React.FC = () => {
  // Assuming posts data is fetched from an API
  const posts = [
    { id: 1, imageUrl: '...', caption: '...', likes: 10, comments: [] },
    { id: 2, imageUrl: '...', caption: '...', likes: 20, comments: [] },
    // More posts...
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;