import styled from '@emotion/styled';
import { cssPaddingContent, maxScreen } from '../../styles/breakpoints';

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  main {
    justify-content: center;
    display: flex;
    flex: 1;
    width: 100%;
  }
`;

export const TemplateContent = styled.div`
  width: 100%;
  max-width: ${maxScreen}px;
  display: flex;
  ${cssPaddingContent()};
`;
