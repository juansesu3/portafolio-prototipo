import styled from "styled-components";

const Lora = styled.div`
    font-family: 'Lora', serif;

`;

const Titulo = styled.p`
    font-size: 32px;
    line-height: 50px;
    padding: 0PX 20px;
    color: #000;

`;

const Text = styled.p`
    font-size: 20px;
    line-height: 35px;
    padding: 0PX 20px;
    color: #000;
`;

const Gridlayers = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(90, 1fr);
`;

const Griduno = styled.div`
background-color: transparent;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1636298420/l6wmsgodsiup2wnktjxi.png");
background-repeat: no-repeat;
width: 100%;
grid-column: 1/11;
grid-row: 1/45;
`; 

const Griddos = styled.div`
background-color: #0e0d27;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 10/40;
padding: 40px 24px ;
`;

const Stylh2 =styled.p`
color: #FFFE;
font-size: 24px;
line-height: 32px;
`;

const Stylp = styled.p`
color: #A7A9BE;
font-size: 20px;
line-height: 32px;

`;

const Gridtres = styled.div`
background-color: transparent;
background-image: url("https://res.cloudinary.com/dv08oqgvx/image/upload/v1636298186/hcmjf5igy6xblaxhriob.png" );
background-repeat: no-repeat;
grid-column: 1/11;
grid-row: 45/90;
`;

const Gridcuatro = styled.div`
background-color: #0e0d27;
box-shadow: 12px 16px 32px #0e0d2776;
grid-column: 2/10;
grid-row: 55/85;
padding: 40px 24px ;
`;

const Gridcinco = styled.div`
background-color: transparent;
color: transparent;
grid-column: 3/11;
grid-row: 87/90;

`;

const Gridseis = styled.div`
background-color: transparent;
color: transparent;
grid-column: 1/11;
grid-row: 120/120;
`;

const Contbutt = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0px;

`;
const Buttuno = styled.button`
    background-color: #0e0d27 ;
    border: 2px solid #FF8906;
    color: #FF8906 ;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;
    &:hover {
        box-shadow: 0px 0px 10px white;
        background-color: #FF8906;
        color: #FFFE;
    
  }

`;
const Buttdos = styled.button`

    
    background-color:  #FF8906;
    color: #FFFE ;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    height: 48px;
    margin: 10px;

    &:hover {
        box-shadow: 0px 0px 10px white;     
        background-color: #0e0d27;
        color: #FF8906;
    
  }

`;

const Image = styled.img`
   

`;


export const Butt2 = Buttdos;
export const Butt1 = Buttuno;
export const Contbu = Contbutt;
export const Stp = Stylp;
export const Sth2 = Stylh2;
export const Grid1 = Griduno;
export const Grid2 = Griddos;
export const Grid3 = Gridtres;
export const Grid4 = Gridcuatro;
export const Grid5 = Gridcinco;
export const Grid6 = Gridseis;
export const Gridstyle = Gridlayers;
export const Textstyle = Text;
export const Fontlora = Lora;
export const Tittle = Titulo;
export const Img = Image;