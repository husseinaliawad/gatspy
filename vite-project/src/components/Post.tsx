import React from 'react';
import Comment from '../components/Comment';

interface PostProps {
  post: {
    id: number;
    imageUrl: string;
    caption: string;
    likes: number;
    comments: string[];
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" />
      <div className="caption">{post.caption}</div>
      <div className="likes">{post.likes} likes</div>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;