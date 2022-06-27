import React from 'react';

import { GitHub, Twitter, Linkedin } from 'react-feather';
import { useTheme } from 'styled-components';
import Link from 'next/link';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  StarContainer,
  SocialMediaContainer,
  SocialMediaLink
} from './styles';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../../env';
import StarIcon from '../icons/StarIcon';

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <TitleContainer itemScope itemType="https://schema.org/Person">
        <Title><Link href="/" itemProp="name">Vitor Sanches</Link></Title>
        <SubTitle itemProp="jobTitle">Front-end developer</SubTitle>
      </TitleContainer>

      <StarContainer>
        <StarIcon stroke={colors.typography.primary} />
      </StarContainer>

      <SocialMediaContainer>
        <Link href={GITHUB_URL || '#'} passHref>
            <SocialMediaLink target="_blank"><GitHub /></SocialMediaLink>
        </Link>
        <Link href={TWITTER_URL || '#'} passHref>
            <SocialMediaLink target="_blank"><Twitter /></SocialMediaLink>
        </Link>
        <Link href={LINKEDIN_URL || '#'} passHref>
              <SocialMediaLink target="_blank"><Linkedin /></SocialMediaLink>
        </Link>
      </SocialMediaContainer>
    </Container>
  );
};

export default Header;
