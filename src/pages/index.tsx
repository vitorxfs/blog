import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { getPostService } from '../common/services/post.service';
import Header from '../common/components/Header';
import PageContainer from '../common/components/PageContainer';
import Post, { PostAttributes } from '../common/models/post.model';
import Posts from '../common/components/Posts';

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
      <Head>
        <title>Vitor Sanches</title>
      </Head>

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
    publishedAt: (new Date(jsonPost.publishedAt))
      .toLocaleDateString('pt-br', { day: 'numeric', month: 'long', year: 'numeric' }),
    title: jsonPost.title
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postService = getPostService();
  const posts = await postService.getPosts();

  const revalidate = 24 * 60 * 60; // In seconds

  return {
    props: {
      posts: posts.map((post) => formatPost(post))
    },
    revalidate
  };
};

export default Home;
