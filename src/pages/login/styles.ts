import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const ContainerPage = styled.div`
  width: 100%;
`;

export const TypographLogin = styled(Typography)`
  color: #005f89;
  margin-top: 1rem;
  padding: 0.5rem 0;
  font-style: normal;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: #e5f6fd;
  border-radius: 4px;
`;

export const Container = styled.div`
  background-image: url(/img/loginImage.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTypography = styled(Typography)`
  position: relative;
  top: 100px;
  font-family: 'Belleza';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 0 3rem;
`;

export const TypographyLink = styled(Typography)`
  text-align: center;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 300;
  color: black;
  text-align: center;
  background-color: #e5f6fd;
  border-radius: 4px;
`;

export const ContainerLink = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  max-width: 25rem;
  padding: 1.5rem 0;
`;
