import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { getPostService } from '../common/services/post.service';
import Header from '../common/components/Header';
import PageContainer from '../common/components/PageContainer';
import Posts from '../common/components/Posts';
import { PostAttributes } from '../common/models/post.model';

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`;

interface Props {
  posts: PostAttributes[];
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postService = getPostService();
  const posts = await postService.getPosts();

  const revalidate = 24 * 60 * 60; // In seconds

  return {
    props: {
      posts: posts.map((post) => post.toJSON())
    },
    revalidate
  };
};

export default Home;
