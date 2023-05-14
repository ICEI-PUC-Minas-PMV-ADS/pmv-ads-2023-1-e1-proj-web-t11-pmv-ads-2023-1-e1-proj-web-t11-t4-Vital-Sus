import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';


export const StyledBox = styled(Box)`
 margin: 70px 24px;
 justify-content: center;
 align-itmes: center;


 h2 {
   font-size: 24px;
 }


 h3 {
   color: black;
   text-align: center;
   font-size: 20px;
   font-weight: bold;
   margin: 16px;
 }


 .stack_duplo {
   margin-top: 16px;
 }


 .stack_buttons {
   justify-content: center;
 }


 .stack_end {
   margin-top: 16px;
   display: flex;
   justify-content: center;
   align-items: flex-end;
 }
`;


export const StyledGrid = styled(Grid)`
 justify-content: center;
`;

export const Container = styled.div`
margin: 2rem 0;
display: flex;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`