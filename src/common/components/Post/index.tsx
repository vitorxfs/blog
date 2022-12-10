import React, { useEffect } from 'react';

import { highlightAll } from 'prismjs';
import 'dracula-prism/dist/css/dracula-prism.css';
import parse from 'html-react-parser';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { Container, ContentContainer, PublishedAt, Author, Title } from './styles';
import { PostAttributes } from '@common/models/post.model';

interface PostProps {
  post: PostAttributes;
}

const Post: React.FC<PostProps> = ({ post }) => {
  useEffect(() => {
    highlightAll();
  }, []);

  return (
    <>
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
