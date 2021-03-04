import styled from 'styled-components';

const NavLiStyle = styled.div`
a {
    text-decoration: none;
    color: #191919;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    position: relative;

    &:hover {
    &::before{
        height: 5px;
        width: 10px;
        background: #191919 0% 0% no-repeat padding-box;
        border-radius: 100px 100px 0px 0px;
        position: absolute;
        content: ''; 
        top: 130%;
        left:50%;
        transform: translate(-50%, 0);
        /* border-radius: 100% 100% 0 0; */
    }
}
}

margin-right: 40px;

`

export default NavLiStyle;