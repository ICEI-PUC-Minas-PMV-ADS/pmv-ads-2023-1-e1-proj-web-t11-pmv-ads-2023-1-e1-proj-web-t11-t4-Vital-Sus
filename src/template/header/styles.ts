import styled from '@emotion/styled';
import { cssBreakpoints } from '../../styles/breakpoints';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  width: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  ${cssBreakpoints('width', ['5rem', '5.5rem'])};
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav a {
    color: #000000;
    text-decoration: none;
    padding-right: 72px;
  }
`;
