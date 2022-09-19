import React from 'react';

import { PostAttributes } from '../../models/post.model';
import parse from 'html-react-parser';

import { Container, ContentContainer, PublishedAt, Author, Title } from './styles';
import PostMetatags from './metatags';

interface PostProps {
  post: PostAttributes;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <PostMetatags post={post} />

      <Container>
        <PublishedAt>{post.publishedAt}</PublishedAt>
        <Title>{post.title}</Title>
        <Author>por Vitor Sanches</Author>
        <ContentContainer>
          {parse(post.content)}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Post;
