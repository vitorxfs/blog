import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media(max-width: ${props => props.theme.breakPoints.sm}) {
    flex-direction: column;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  order: 3;
`;

export const SocialMediaLink = styled.a`
  color: ${props => props.theme.colors?.typography.primary};
  display: inline-block;
  padding: 8px;
`;

export const StarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  order: 2;

  @media(max-width: ${props => props.theme.breakPoints.sm}) {
    order: 1;
  }
`;

export const SubTitle = styled.p`
  color: ${props => props.theme.colors?.typography.secondary};
  font-size: 20px;

  @media(max-width: ${props => props.theme.breakPoints.sm}) {
    text-align: center;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.colors?.typography.primary};
  font-size: 36px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  order: 1;

  @media(max-width: ${props => props.theme.breakPoints.sm}) {
    justify-content: center;
    order: 2;
  }
`;
