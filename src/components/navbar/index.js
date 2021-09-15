import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from '../../logo.png';
import Hamburger from "./hamburger";
import Button from '../Button';
import { FaUserLock, FaAngleDown } from 'react-icons/fa';

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
        <>
        <MobileNavStyle open={mobileNav}>
            <img src={logo} />
            <div className="mobile_links">
                    <a href="#">Home</a>               
                    <a href="#" className="services-btn">Services <FaAngleDown /></a>
                    <Button
                        fontSize='21px'
                        borderRadius='10px'
                        padding='8px 24px'
                        hover='true'
                        hoverColor='black'
                        hoverTextColor='white'
                        useAction={true}
                        action="https://www.google.com"
                        actionType='redirect'
                    ><FaUserLock /> Dashboard</Button>
            </div>
            <h3 onClick={() => setMobileNav(false)}>X</h3>
        </MobileNavStyle>
        <NavStyle open={mobileNav}>
            <img src={logo} />
            <div className="nav_links">
                    <a href="#">Home</a>                
                    <a href="#" className="services-btn">Services <FaAngleDown /></a>
                    <Button
                        fontSize='21px'
                        borderRadius='10px'
                        padding='8px 24px'
                        hover='true'
                        hoverColor='black'
                        hoverTextColor='white'
                        useAction={true}
                        action="https://www.google.com"
                        actionType='redirect'
                    ><FaUserLock /> Dashboard</Button>
            </div>
            <Hamburger action={handleMobileNav} show={mobileNav} />
        </NavStyle>
        </>
    )

}

export default Navbar;