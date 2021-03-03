import styled from 'styled-components';

const ColStyled = styled.div`

a{
    color: white;
    opacity: 70%;
    text-decoration: none;
    width: 100%;
    font-size: 14px;
    font-weight:400;
}
margin: ${ ( { margin } ) => margin && margin };
max-width: ${ ( { width } ) => width && width };
width: 100%;
text-decoration: none;
color: #FFFFFF;
font-size: 14px;
font-family: Poppins, sans-serif;

`

export default ColStyled;