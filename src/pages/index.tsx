import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { getPostService } from 'src/initializer';
import Head from '@infra/ui/components/Head';
import Header from '@common/components/Header';
import PageContainer from '@common/components/PageContainer';
import Post, { PostAttributes } from '@common/models/post.model';
import Posts from '@common/components/Posts';

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`;

interface Props {
  posts: Omit<PostAttributes, 'content'>[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head pageTitle="Vitor Sanches" />

      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Posts posts={posts} />
      </PageContainer>
    </>
  );
};

const formatPost = (post: Post): Omit<PostAttributes, 'content'> => {
  const jsonPost = post.toJSON();

  return {
    description: jsonPost.description,
    id: jsonPost.id,
    lang: jsonPost.lang,
    publishedAt: new Date(jsonPost.publishedAt).toLocaleDateString('pt-br', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    title: jsonPost.title,
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postService = getPostService();
  const posts = postService.getPosts();

  return {
    props: {
      posts: posts.map((post) => formatPost(post)),
    },
  };
};

export default Home;
