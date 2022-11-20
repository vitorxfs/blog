import styled from 'styled-components';
import Link from '../../../infrastructure/ui/components/Link';

export const Container = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: column;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  order: 3;
`;

export const SocialMediaLink = styled(Link)`
  color: ${(props) => props.theme.colors?.typography.primary};
  display: inline-block;
  padding: 8px;
  position: relative;

  &::before {
    content: '';
    background-color: ${(props) => props.theme.colors?.primary};
    border-radius: 50%;
    height: 0;
    margin: auto;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    z-index: -1;
  }

  &:hover::before {
    height: 32px;
    transition: width 150ms ease, height 150ms ease;
    width: 32px;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  order: 2;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    order: 1;
  }
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors?.typography.secondary};
  font-size: 20px;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    text-align: center;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors?.typography.primary};
  font-size: 36px;
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    background-color: ${(props) => props.theme.colors?.primary};
    bottom: 8px;
    display: block;
    height: 0;
    position: absolute;
    transition: height 100ms ease;
    width: 100%;
    z-index: -1;
  }

  &:hover::before {
    height: 30%;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  order: 1;

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    justify-content: center;
    order: 2;
  }
`;
