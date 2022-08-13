import React from 'react';

import { PostAttributes } from '../../models/post.model';
import { PostItem, PostsContainer, PublishedAt, Subtitle, Title } from './styles';

interface PostsProps {
  posts: Omit<PostAttributes, 'content'>[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <PostItem key={post.id} href={`/post/${post.id}`}>
          <PublishedAt>{post.publishedAt}</PublishedAt>
          <Title>{post.title}</Title>
          <Subtitle>{post.description}</Subtitle>
        </PostItem>
      ))}
    </PostsContainer>
  );
};

export default Posts;
