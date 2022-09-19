import React from 'react';

import Link from 'next/link';

import { PostAttributes } from '../../models/post.model';
import { PostItem, PostsContainer, PublishedAt, Subtitle, Title } from './styles';

interface PostsProps {
  posts: Omit<PostAttributes, 'content'>[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}><PostItem tabIndex={0}>
            <PublishedAt>{post.publishedAt}</PublishedAt>
            <Title>{post.title}</Title>
            <Subtitle>{post.description}</Subtitle>
        </PostItem></Link>
      ))}
    </PostsContainer>
  );
};

export default Posts;
