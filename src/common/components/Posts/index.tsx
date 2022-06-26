import React from 'react';
import { Post } from '../../services/post.service';

import { PostItem, PostsContainer, PublishedAt, Subtitle, Title } from './styles';

interface PostsProps {
  posts: Post[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <PostItem key={post.id} href="#">
          <PublishedAt>{post.publishedAt}</PublishedAt>
          <Title>{post.title}</Title>
          <Subtitle>{post.description}</Subtitle>
        </PostItem>
      ))}
    </PostsContainer>
  );
};

export default Posts;
