import styled from 'styled-components';

const CopyStyle = styled.div`

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

@media (max-width: 1116px) {
    margin-top: 58px;
    margin-left: 0;
    margin-bottom: 10px
}
`

export default CopyStyle;