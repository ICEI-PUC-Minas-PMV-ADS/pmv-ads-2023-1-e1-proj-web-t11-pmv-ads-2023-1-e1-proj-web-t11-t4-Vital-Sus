import styled from '@emotion/styled' 
import { StyledTextField } from '../../components/textField/styles';

export const ContainerPage = styled.div` 
    width: 100%
    `;

export const Login = styled.div`
    display: inline;
    position:absolute;
    background-color: white;
    padding: 20px;
    float: left;
    top:  300px;
    left: 25px;

    & > * {
        padding-top: 30px;
    }

    .form {
        padding-top: 30px;
    }
`;


export const ContainerLogo = styled.div`
    background-image: url(/img/LoginPage-img.png);
    background-size: cover;
    float: right;
    width: 705px;
    height: 918px; 
    padding: 10px;
    align-items: center;


.titulo{
    position:relative;
    top: 100px;
    font-family: 'Belleza';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
}
`;


export const Link = styled.a`
    position: relative;
    top: 550px;
    text-align: center;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 16px;
    color: black;
}

p {
    font-weight: bold;
    text-decoration: underline;
}
`
export const Image = styled.img`
    padding-top: 50px;
`;

