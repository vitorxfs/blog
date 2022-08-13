import React from 'react';
import styled from 'styled-components';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getPostService } from '../../common/services/post.service';
import Head from 'next/head';
import Header from '../../common/components/Header';
import PageContainer from '../../common/components/PageContainer';
import Post from '../../common/components/Post';
import PostClass, { PostAttributes } from '../../common/models/post.model';

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`;

interface Props {
  post: PostAttributes;
}

const Home: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`Vitor Sanches | ${post.title}`}</title>
      </Head>

      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Post post={post}/>
      </PageContainer>
    </>
  );
};

const formatPost = (post: PostClass): PostAttributes => {
  const jsonPost = post.toJSON();

  return {
    content: jsonPost.content,
    description: jsonPost.description,
    id: jsonPost.id,
    publishedAt: (new Date(jsonPost.publishedAt))
      .toLocaleDateString('pt-br', { day: 'numeric', month: 'long', year: 'numeric' }),
    title: jsonPost.title
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postService = getPostService();
  const posts = await postService.getPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const postService = getPostService();

  const { id } = context.params as { id: string };

  const post = await postService.getPostByUid(id);

  const revalidate = 7 * 24 * 60 * 60; // In seconds

  return {
    props: {
      post: formatPost(post)
    },
    revalidate
  };
};

export default Home;
