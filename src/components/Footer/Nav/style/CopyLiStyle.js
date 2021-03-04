import styled from 'styled-components';

const CopyLiStyle = styled.ul`
display: flex;
list-style-type: none;
margin-left: 113px;
color: white;
opacity: 70%;

@media (max-width: 1116px) {
    margin-left: 0;
}

@media (max-width: 590px) {
    flex-wrap: wrap;
    justify-content: space-between;
}
`

export default CopyLiStyle;