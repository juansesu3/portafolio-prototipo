import styled from "styled-components";


const Hederstyle = styled.header`

flex-direction: row;
align-items: center;
padding: 0px;
width: 100%;
height: 60px;
background-color: #111533;

`;

const Nav =  styled.nav`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
list-style: none;
top: 5px;


`;

const button = styled.button`
position: relative;
background: #FF8906;
border-radius: 5px;
color: white;
font-weight: bold;
height: 40px;
left: 50px;
`;


const Span = styled.span`
    color: #ff8906;
    font-size: 35px;
    margin-left: -50px;
`;

const Logo =  styled.div`
position: relative;
font-size: 40px;
text-decoration: none;
color: white;
right: 50px;
`;


export const Spn = Span;
export const Log = Logo;
export const Navig = Nav;
export const But = button;
export const Headers = Hederstyle;