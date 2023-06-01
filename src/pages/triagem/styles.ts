import { Tabs, Typography } from '@mui/material';
import styled from 'styled-components';
import { Item } from '../homePage/styles';

export const ContainerTabs = styled.div`
  display: flex;
`;

export const TabsTriagem = styled(Tabs)`
  background-color: #d9d9d9;
`;

export const TypographyTriagem = styled(Typography)`
  font-family: 'Belleza';
  font-style: normal;
  font-weight: 400;
  background-color: #d9d9d9;
  text-align: center;
  padding: 0.5rem 0;
`;

export const StyleItem = styled(Item)`
  margin: 0.5rem 0;
`;

export const StyleTypography = styled(Typography)`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  color: #005f89;
`;
