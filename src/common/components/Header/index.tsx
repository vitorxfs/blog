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
        <SocialMediaLink href={GITHUB_URL} target="_blank"><GitHub /></SocialMediaLink>
        <SocialMediaLink href={TWITTER_URL} target="_blank"><Twitter /></SocialMediaLink>
        <SocialMediaLink href={LINKEDIN_URL} target="_blank"><Linkedin /></SocialMediaLink>
      </SocialMediaContainer>
    </Container>
  );
};

export default Header;
