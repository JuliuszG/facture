import styled from 'styled-components';

const Container = styled.div`
    width: 90.28%;
    display: ${({ display }) => display && display}; 
    justify-content: ${({  content }) => content && content };

`

export default Container;