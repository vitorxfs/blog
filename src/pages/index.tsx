import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import useThemeSwitcher from '../common/hooks/useThemeSwitcher';

const Home: NextPage = () => {
  const { onSwitchTheme } = useThemeSwitcher();

  return (
    <div>
      <Head>
        <title>Vitor Sanches</title>
      </Head>

      <h1>Vitor Sanches&apos; Blog</h1>

      <button onClick={onSwitchTheme}>Switch Theme</button>
    </div>
  );
};

export default Home;
