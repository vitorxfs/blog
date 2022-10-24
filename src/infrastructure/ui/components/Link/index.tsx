import React from 'react';
import NextLink from 'next/link';

interface LinkProps extends Omit<HTMLAnchorElement, 'children' | 'scroll'> {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  passHref?: boolean;
  replace?: boolean;
  shallow?: boolean;
  scroll?: boolean;
  locale?: string | false;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  ...rest
}) => {
  return (
    <NextLink
      href={href}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...rest}
    >
      <a>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
