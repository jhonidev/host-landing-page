import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from '../logo.png';
import Hamburger from "./hamburger";
import Button from '../Button';
import { FaUserLock, FaAngleDown } from 'react-icons/fa';


const GlobalNavStyle = styled.div`
    .dropdown {
        position:relative;
        display:inline-block;
    }

    .dropdown-content {
        position:absolute;
        background-color:#2130a6;
        padding:24px 38px;
        left:-54px;
        top:45px;
        border-radius:10px;
        z-index:1;
        min-width: fit-content;
        display:flex;
        flex-direction: column;
    }

    .dropdown-content a {
        min-width: max-content;
        color:white !important;
    }

    @media only screen and (max-width: 745px) {
        .dropdown-content {
            top:35px;
        }
    }
`;

const MobileNavStyle = styled.div`
    display:none;
    @media only screen and (max-width: 745px) {
    padding-top:25px;
    width:100%;
    display:flex;
    background-color:#4D61FC;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    transform: ${(props) => props.open ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
        
        img {
            margin-bottom:15px;
        }

    }

    img {
        width:150px;
    }
    a {
        color:white;
        text-decoration: none;
        font-size:21px;
    }
    .mobile_links {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .mobile_links > *{
        margin-bottom:10px;
    }

    h3 {
        margin-top:15px;
        color:white;
    }
`;

const NavStyle = styled.div`
    padding-top:45px;
    width:100%;
    display: ${(props) => props.open ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    animation: enter 0.5s ease-in-out;

    .nav_links {
        display:flex;
        align-items: center;
    }

    .nav_links > * {
        margin-left:25px;
    }

    img {
        width:150px;
    }

    a {
        color:white;
        text-decoration: none;
        font-size: 21px;
    }
    @media only screen and (max-width: 745px) {
        margin-top: -265px;
        .nav_links {
            display:none;
        }
    }

    @keyframes enter {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`;

function Navbar() {

    const [mobileNav, setMobileNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    }

    useEffect(() => {
        window.addEventListener('resize', function() {
            if(window.innerWidth > 722) {
                if(!mobileNav) {
                    setMobileNav(false);
                }
            }
        });
    }, []);

    return(
        <GlobalNavStyle>
        <MobileNavStyle open={mobileNav}>
            <img src={logo} alt="navbar logo" />
            <div className="mobile_links">
                    <a href="#">Home</a>
                    <div className="dropdown">
                        <a href="#" className="services-btn" onClick={() => setDropdown(!dropdown)}>Services <FaAngleDown /></a>
                        {dropdown &&<div className="dropdown-content">
                            <a href="#">Web Hosting</a>
                            <a href="#">Game Hosting</a>
                        </div>}
                    </div>
                    <Button
                        fontSize='21px'
                        borderRadius='10px'
                        padding='8px 24px'
                        hover='true'
                        hoverColor='black'
                        hoverTextColor='white'
                    ><FaUserLock /> Dashboard</Button>
            </div>
            <h3 onClick={() => setMobileNav(false)}>X</h3>
        </MobileNavStyle>
        <NavStyle open={mobileNav}>
            <img src={logo} alt="navbar logo" />
            <div className="nav_links">
                    <a href="#">Home</a>                
                    <div className="dropdown">
                        <a href="#" className="services-btn" onClick={() => setDropdown(!dropdown)}>Services <FaAngleDown /></a>
                        {dropdown &&<div className="dropdown-content">
                            <a href="#">Web Hosting</a>
                            <a href="#">Game Hosting</a>
                        </div>}
                    </div>
                    <Button
                        fontSize='21px'
                        borderRadius='10px'
                        padding='8px 24px'
                        hover='true'
                        hoverColor='black'
                        hoverTextColor='white'
                    ><FaUserLock /> Dashboard</Button>
            </div>
            <Hamburger action={handleMobileNav} show={mobileNav} />
        </NavStyle>
        </GlobalNavStyle>
    )

}

export default Navbar;