import styled from "@emotion/styled";
import { cssBreakpoints, cssPaddingContent } from "../../styles/breakpoints";
import { Typography } from "@mui/material";

export const ContainerTriagem = styled.div`
  background-color: #E2F6FF;
  display: flex;
  flex-direction: column;
  ${cssPaddingContent()};
`;

export const Item = styled.div`
  align-items: center;
`

export const TypographyHome = styled(Typography)`
  font-family: 'Belleza';
  font-style: normal;
  font-weight: 400;
  ${cssBreakpoints('font-size', ['2rem', '2rem', '3rem', '3rem'])};
`
export const Image = styled.img`
  max-width: 500px;
  border-radius: 100px;
  border: 5px solid #005F89;
  margin: 32px;
`

export const Description = styled.p`
  margin: 1rem 0;
  text-align: justify;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`

export const ContainerInfo = styled.div`
text-align: center;

.icon{
  font-size: 100px;
  color: #005F89;
}
`

export const Container = styled.div`
width: 100%;
`