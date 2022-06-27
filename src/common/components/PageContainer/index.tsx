import styled from 'styled-components';

const PAGE_MAX_WIDTH = 1000;
const PADDING_HORIZONTAL = 16;

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding-left: ${PADDING_HORIZONTAL}px;
  padding-right: ${PADDING_HORIZONTAL}px;
`;

export default PageContainer;
