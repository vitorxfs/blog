import React from 'react';

import { PostAttributes } from '../../models/post.model';
import {
  PostItem,
  PostsContainer,
  PublishedAt,
  Subtitle,
  Title,
} from './styles';
import Link from '../../../infrastructure/ui/components/Link';

interface PostsProps {
  posts: Omit<PostAttributes, 'content'>[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <PostItem>
            <PublishedAt>{post.publishedAt}</PublishedAt>
            <Title>{post.title}</Title>
            <Subtitle>{post.description}</Subtitle>
          </PostItem>
        </Link>
      ))}
    </PostsContainer>
  );
};

export default Posts;
