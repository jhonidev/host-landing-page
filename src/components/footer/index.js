import styled from "styled-components";
import logo from '../logo.png';
import { FaAngleRight } from 'react-icons/fa';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const FooterStyle = styled.div`
    width:100%;
    background-color:#4D61FC;

    .v-flex {
        display:flex;
        flex-direction: column;
    }

    .h-flex {
        padding-top:60px;
        padding-bottom:45px;
        display:flex;
        justify-content: space-between;
    }

    .circle {
        width:15px;
        height:15px;
        background-color:white;
        border-radius:100%;
    }

    .host-info {
        display:flex;
        align-items: center;
        margin-bottom:10px;
    }

    .host-info p {
        margin-top:0;
        margin-left:8px;
        margin-bottom:0;
        font-size:18px;
        color:white;
    }

    img {
        width:160px;
        margin-bottom:15px;
    }

    h2 {
        color:white;
        font-weight: bold;
        font-size:32px;
    }

    .host-links {
        margin-top:10px;
        display:flex;
        flex-direction: column;
    }

    .host-links a {
        text-decoration:none;
        color:white;
    }

    .copy-text {
        color:white;
        text-align:center;
    }

    @media only screen and (max-width: 750px) {
        .h-flex {
            flex-direction: column;
            align-items: flex-start;
        }
        .v-flex {
            margin-bottom:20px;
        }
    }

`;

function Footer() {
    return(
        <FooterStyle>
            <Container>
                <div className="h-flex">
                    <div className="v-flex">
                        <img src={logo} alt="footer logo" />
                        <div className="host-info">
                            <div className="circle"></div>
                            <p>Osasco, SP</p>
                        </div>
                        <div className="host-info">
                            <div className="circle"></div>
                            <p>@instagram</p>
                        </div>
                        <div className="host-info">
                            <div className="circle"></div>
                            <p>contact@coolemail.com</p>
                        </div>
                    </div>
                    <div className="v-flex">
                        <h2>SERVICES</h2>
                        <div className="host-links">
                            <a href="#"><FaAngleRight /> Web Hosting</a>
                            <a href="#"><FaAngleRight /> Game Hosting</a>
                            <a href="#"><FaAngleRight /> VPS</a>
                        </div>
                    </div>
                    <div className="v-flex">
                        <h2>INSTITUTIONAL</h2>
                        <div className="host-links">
                            <a href="#"><FaAngleRight /> Terms</a>
                            <a href="#"><FaAngleRight /> Dashboard</a>
                        </div>
                    </div>
                </div>
            </Container>
        </FooterStyle>
    )
}

export default Footer;