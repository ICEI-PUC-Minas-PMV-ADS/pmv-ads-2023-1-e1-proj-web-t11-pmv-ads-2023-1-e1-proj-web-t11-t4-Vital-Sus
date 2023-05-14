import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";
import { cssBreakpoints, maxScreen } from "../../styles/breakpoints";


export const HorizontalDivider = styled(Divider)`
  border: 1px inset;
  width: 100%;
  opacity: 0.8;
  color: rgba(182, 182, 182, 0.33);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  min-height: 88px;
  height: 100%;
  margin: 0;
  background-color: #4B4B4B;
  flex-wrap: wrap;
  padding: 32px 32px 8px 32px;
  box-sizing: border-box;
`;

export const TypographFooter = styled(Typography)`
  font-size: 14px;
  color: #fff;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: ${maxScreen}px;

  ${cssBreakpoints('padding', [
    '1rem 0',
    '1rem 0',
    '1rem 0',
    '0 0'
  ])};
`;

export const ContainerBaseFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ImageLogo = styled.img`
  max-width: 100px;
  margin-bottom: 20px;
`

export const LinkIcons = styled.div`
  a {
    display: inline-block;
    padding-right: 20px;
    color: rgba(182, 182, 182, 0.33);
    font-size: 2.5rem;
  }

  a:hover {
    color: #E2F6FF;
  }
`
export const Credits = styled.p`
  font-size: 12px;
  text-align: right;
  color: #fff;
  margin: 1rem 0;
`