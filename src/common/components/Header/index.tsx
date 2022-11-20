import React from 'react';

import { GitHub, Twitter, Linkedin } from 'react-feather';
import { useTheme } from 'styled-components';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  StarContainer,
  SocialMediaContainer,
  SocialMediaLink,
} from './styles';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from 'src/env';
import Link from '@infra/ui/components/Link';
import StarIcon from '../icons/StarIcon';

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <TitleContainer itemScope itemType="https://schema.org/Person">
        <Title>
          <Link to="/" itemProp="name">
            Vitor Sanches
          </Link>
        </Title>
        <SubTitle itemProp="jobTitle">Desenvolvedor Front-end</SubTitle>
      </TitleContainer>

      <StarContainer>
        <StarIcon stroke={colors.typography.primary} aria-label="" />
      </StarContainer>

      <SocialMediaContainer>
        <SocialMediaLink to={GITHUB_URL || '#'} external aria-label="GitHub">
          <GitHub />
        </SocialMediaLink>
        <SocialMediaLink to={TWITTER_URL || '#'} external aria-label="Twitter">
          <Twitter />
        </SocialMediaLink>
        <SocialMediaLink
          to={LINKEDIN_URL || '#'}
          external
          aria-label="Linkedin"
        >
          <Linkedin />
        </SocialMediaLink>
      </SocialMediaContainer>
    </Container>
  );
};

export default Header;
