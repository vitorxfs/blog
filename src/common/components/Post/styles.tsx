import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const ContentContainer = styled.section`
  font-size: 18px;
  line-height: 200%;
  margin-top: 48px;

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.25rem;
  }
`;

export const PublishedAt = styled.time`
  color: ${props => props.theme.colors.typography.secondary};
  font-size: 16px;
`;

// export const Subtitle = styled.h2`
//   color: ${props => props.theme.colors.typography.secondary};
//   font-size: 20px;
//   font-weight: normal;
// `;

export const Author = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: normal;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.typography.primary};
  font-family: 'Limelight', 'Roboto', sans-serif;
  font-size: 48px;
`;
