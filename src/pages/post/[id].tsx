import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import { APP_URL, DEFAULT_EMBED_POST_IMAGE } from 'src/env';
import { getPostService } from '@common/services/post.service';
import Header from '@common/components/Header';
import PageContainer from '@common/components/PageContainer';
import Post from '@common/components/Post';
import PostClass, { PostAttributes } from '@common/models/post.model';

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`;

interface Props {
  post: PostAttributes;
}

const Home: NextPage<Props> = ({ post }) => {
  const postUrl = `${APP_URL}/post/${post.id}`;

  return (
    <>
      <Head>
        <meta name="image" content={DEFAULT_EMBED_POST_IMAGE} />
        <meta property="og:image" content={DEFAULT_EMBED_POST_IMAGE} />
        <meta
          property="og:image:secure_url"
          content={DEFAULT_EMBED_POST_IMAGE}
        />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={DEFAULT_EMBED_POST_IMAGE} />
        <meta name="twitter:image:src" content={DEFAULT_EMBED_POST_IMAGE} />
        <meta name="twitter:image:alt" content={post.title} />
        <meta name="twitter:image:type" content="image/png" />

        <meta name="description" content={post.description} />
        <meta property="og:description" content={post.description} />

        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />

        <link rel="canonical" href={postUrl} />

        <title>{`Vitor Sanches | ${post.title}`}</title>
      </Head>

      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Post post={post} />
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
    publishedAt: new Date(jsonPost.publishedAt).toLocaleDateString('pt-br', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    title: jsonPost.title,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postService = getPostService();
  const posts = await postService.getPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id },
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
      post: formatPost(post),
    },
    revalidate,
  };
};

export default Home;
