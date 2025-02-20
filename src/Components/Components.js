import styled from 'styled-components';

export const Container = styled.div`
border-radius: 50px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 1000px;
  max-width: 100%;
  min-height: 600px;
  ${props => props.dark === "true" ? `
   background-color: black;
 ` : `background-color: white;`}
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinin !== "true" ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
 ${props => props.dark === "true" ? `
   background-color: black;
 ` : `background-color: white;`}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinin !== "true" ? `transform: translateX(100%);` : null)
}
${props => (props.dark === "true" ? `
   background-color: black;
 ` : `background-color: white;`)}
`;

export const Form = styled.form`

${props => props.dark === "true" ? `
   background-color: black;
 ` : `background-color: white;`}
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-family: "ubuntu";
font-weight: bold;
font-size: 50px;
margin: 0;
margin-bottom: 20px;
${props => (props.dark !== "true" ? `
   color: black;
 ` : `color: white;`)}
`;

export const Input = styled.input`

${props => (props.dark === "true" ? `
background-color: #3C3C3C;
 ` : `background-color: #BABABA;`)}
 ${props => (props.dark === "true" ? `
color: white;
 ` : `color: black;`)}
font-size: 14px;
border: none;
border-radius: 10px;
padding: 12px 15px;
margin: 8px 0;
width: 80%;
&::placeholder {
  ${props => (props.dark === "true" ? `color: darkgrey;` : `color: #646464;`)}
}
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 2px solid #3b9db8;
   background-color: #00c8ff;
   ${props => (props.dark !== "true" ? `
  color: black;
` : `color: white;`)}
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border:2px solid;
${props => (props.dark !== "true" ? `
  color: black;
` : `color: white;`)}
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinin !== "true" ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #44D4EB, #00c8ff);
background: linear-gradient(to right, #00c8ff, #44D4EB);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinin !== "true" ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 ;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`

  ${props => props.signinin !== "true" ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 20px;
    transform: translateX(0);
    ${props => props.signinin !== "true" ? `transform: translateX(20%);` : null}
`;

export const Paragraphr = styled.p`
font-size: 20px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-left:70px
  ${props => (props.dark !== "true" ? `
  color: black;
` : `color: white;`)}
  `;
  export const Paragraphl = styled.p`
font-size: 20px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-right:40px
  ${props => (props.dark !== "true" ? `
  color: black;
` : `color: white;`)}
  `;
  
  