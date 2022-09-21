import styled from 'styled-components';

export const PostItem = styled.li`
  list-style: none;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;

  &:hover > h1::before {
    height: 40%;
  }
`;

export const PostsContainer = styled.ul`
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
  position: relative;
  width: fit-content;

  &::before{
    content: '';
    background-color: ${props => props.theme.colors?.primary};
    bottom: 8px;
    display: block;
    height: 0;
    position: absolute;
    transition: height 100ms ease;
    width: 100%;
    z-index: -1;
  }
`;
