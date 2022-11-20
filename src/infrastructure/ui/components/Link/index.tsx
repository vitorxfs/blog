import React from 'react';
import NextLink from 'next/link';

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'href'
>;

interface LinkProps extends AnchorProps {
  children: React.ReactNode;
  external?: boolean;
  to: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  external,
  to,
  ...anchorProps
}) => {
  return (
    <NextLink href={to} passHref>
      <a target={external ? '_blank' : undefined} {...anchorProps}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
