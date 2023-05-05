import styled from '@emotion/styled';

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  main {
    display: flex;
    flex: 1;
    width: 100%;
  }
`;

export const TemplateContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`;
