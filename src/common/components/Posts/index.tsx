import React from 'react';

import styled from 'styled-components';

const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const posts = [
  {
    uid: '1',
    title: 'Lorem ipsum dolor sit amet eu não sei o que escrever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur faucibus ornare. Etiam eget auctor neque.',
    publishedAt: new Date('10/03/2022').toLocaleString('pt-br')
  },
  {
    uid: '2',
    title: 'Lorem ipsum dolor sit amet eu não sei o que escrever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur faucibus ornare. Etiam eget auctor neque.',
    publishedAt: new Date('10/03/2022').toLocaleString('pt-br')
  },
  {
    uid: '3',
    title: 'Lorem ipsum dolor sit amet eu não sei o que escrever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur faucibus ornare. Etiam eget auctor neque.',
    publishedAt: new Date('10/03/2022').toLocaleString('pt-br')
  },
  {
    uid: '4',
    title: 'Lorem ipsum dolor sit amet eu não sei o que escrever',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur faucibus ornare. Etiam eget auctor neque.',
    publishedAt: new Date('10/03/2022').toLocaleString('pt-br')
  }
];

const PublishedAt = styled.time`
  font-size: 16px;
  color: ${props => props.theme.colors.typography.secondary};
`;

const Title = styled.h1`
  font-size: 36px;
  font-family: 'Limelight', 'Roboto', sans-serif;
  color: ${props => props.theme.colors.typography.primary};
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.colors.typography.secondary};
  font-weight: normal;
`;

const PostItem = styled.a`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostItem key={post.uid} href="#">
          <PublishedAt>{post.publishedAt}</PublishedAt>
          <Title>{post.title}</Title>
          <Subtitle>{post.description}</Subtitle>
        </PostItem>
      ))}
    </PostsContainer>
  );
};

export default Posts;
