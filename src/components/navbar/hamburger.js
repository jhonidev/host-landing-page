import { useCallback } from "react";
import styled from "styled-components";

const HamburgerStyle = styled.div`

    display:none;
    cursor:pointer;

    .hamburger-line {
        width:25px;
        height:2px;
        background-color:white;
        margin-top:5px;
    }

    @media only screen and (max-width: 745px) {
        display:block;
    }

`;

function Hamburger({ action, show }) {

    return(
        !show &&
        <HamburgerStyle
            onClick={() => action()}
        >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </HamburgerStyle>
    )

}

export default Hamburger;