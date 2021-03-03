import styled from 'styled-components';

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ color }) => color && color}; 
    height: ${({ height }) => height && height }; 

    @media (max-width: 1116px){
        height: auto;
    }
`

export default Section;