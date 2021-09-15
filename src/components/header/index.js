import Navbar from "../navbar";
import bg from '../../bgwhite.png';
import styled from "styled-components";
import Text from '../Text';
import Button from '../Button';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const HeaderStyle = styled.div`
    width:100%;
    height:800px;
    background-color:#4D61FC;

    .bgwhite {
        position:absolute;
        top:700px;
    }

    .header-text {
        margin-top:200px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }

    .header-btns {
        margin-top:40px;
        display:flex;
    }

    .header-btns > * {
        margin-left:10px;
        margin-right:10px;
    }
`;

function Header() {
    return (
        <HeaderStyle>
            <Container>
                <Navbar />
                <div className="header-text">
                    <Text 
                    fontWeight='600' 
                    fontSize='32px' 
                    color='#fff'
                    >HOST YOUR MINECRAFT SERVER</Text>
                    <Text fontWeight='400' fontSize='18px' color='#AAA6A6' marginTop='10px'>Host your server with us and enjoy our quality</Text>
                    <div className="header-btns">
                        <Button 
                        border='1px solid #fff' 
                        bgColor='#fff' 
                        color='#4D61FC' 
                        fontSize='24px' 
                        hover='true' 
                        hoverColor='#4D61FC'
                        hoverTextColor='#ffffff' 
                        borderRadius='10px' 
                        minWidth='260px'
                        mobileOptions='true'
                        fontSizeMobile='18px'
                        paddingMobile='12px 21px'
                        >Entrar em contato</Button>
                        <Button 
                        border='1px solid #fff' 
                        bgColor='#4D61FC' 
                        color='#fff' 
                        fontSize='24px' 
                        hover='true' 
                        hoverColor='#ffffff' 
                        hoverTextColor='#4D61FC' 
                        borderRadius='10px' 
                        minWidth='260px'
                        mobileOptions='true'
                        fontSizeMobile='18px'
                        paddingMobile='12px 21px'
                        >Consultar planos</Button>
                    </div>
                </div>
            </Container>
        </HeaderStyle>
    )
}

export default Header;