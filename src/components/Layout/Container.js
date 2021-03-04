import styled from 'styled-components';

const Container = styled.div`
    width: 90.28%;
    display: ${({ display }) => display && display}; 
    justify-content: ${({  content }) => content && content };

    @media (max-width: 1116px){
        flex-direction:column;
    }

`

export default Container;