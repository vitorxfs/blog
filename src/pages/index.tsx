import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../common/components/Header';
import PageContainer from '../common/components/PageContainer';
import Posts from '../common/components/Posts';
import styled from 'styled-components';
import ThemeSwitcherButton from '../common/components/ThemeSwitcherButton';

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vitor Sanches</title>
      </Head>

      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <Posts />
      </PageContainer>
    </>
  );
};

export default Home;
