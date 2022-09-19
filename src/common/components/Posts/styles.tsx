import styled from 'styled-components';

export const PostItem = styled.a`
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
`;

export const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PublishedAt = styled.time`
  color: ${props => props.theme.colors.typography.secondary};
  font-size: 16px;
`;

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.typography.secondary};
  font-size: 20px;
  font-weight: normal;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.typography.primary};
  font-family: 'Limelight', 'Roboto', sans-serif;
  font-size: 36px;
`;
