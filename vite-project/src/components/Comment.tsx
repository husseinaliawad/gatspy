import React from 'react';

interface CommentProps {
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return <div className="comment">{comment}</div>;
};

export default Comment;