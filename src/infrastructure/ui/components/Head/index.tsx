import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  pageTitle?: string;
  children?: React.ReactNode;
}

const Head: React.FC<HeadProps> = ({ pageTitle, children }) => {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      {children}
    </NextHead>
  );
};

export default Head;
