import styled from 'styled-components';

const Input = styled.input`
max-width: 359px;
width: 100%;
margin-top: 32px;
margin-bottom: 19px;
background: none ;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid white;
color: white;

&:focus {
    outline-style: none;
}
`;

export default Input;