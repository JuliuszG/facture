import styled from 'styled-components';

const ColPosition = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;


@media (max-width: 590px){
justify-content: space-between;
flex-wrap: wrap;

}
`

export default ColPosition;