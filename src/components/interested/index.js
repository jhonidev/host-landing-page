import styled from "styled-components";
import Button from '../Button';
import payments from './payments.png';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const InterestedStyle = styled.div`

    width:100%;
    margin-top:200px;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;

    .btn-row{
        margin-top:15px;
        display:flex;
    }

    .btn-row > *{
        margin-left:10px;
        margin-right:10px;
    }

    h2 {
        font-size:32px;
        font-weight: bold;
    }

    p {
        font-size:24px;
        color:#61656D;
        max-width: 700px;
        text-align:center;
    }

    img {
        margin-top:100px;
        margin-bottom:100px;
    }

    @media only screen and (max-width: 750px) {
        img {
            width:80%;
        }
    }

    @media only screen and (max-width: 500px) {

    .btn-row {
        flex-direction:column;
        align-items:center;
    }
    .btn-row > * {
        margin-bottom:10px;
    }

    }

`;

function Interested() {

    return(
        <Container>
        <InterestedStyle>
                <h2>Got interested?</h2>
                <p>Did you like what we offer? Please, feel free to reach us or see our plans. For sure one will please you!</p>
                <div className="btn-row">
                <Button 
                        border='1px solid #4D61FC' 
                        bgColor='#fff' 
                        color='#4D61FC' 
                        fontSize='32px' 
                        hover='true' 
                        hoverColor='#4D61FC'
                        hoverTextColor='#ffffff' 
                        borderRadius='10px'
                        padding='18px 48px'
                        mobileOptions='true'
                        fontSizeMobile='18px'
                        paddingMobile='12px 18px'
                        >Entrar em contato</Button>
                        <Button 
                        border='1px solid #4D61FC' 
                        bgColor='#4D61FC' 
                        color='#fff' 
                        fontSize='32px' 
                        hover='true' 
                        hoverColor='#ffffff' 
                        hoverTextColor='#4D61FC' 
                        borderRadius='10px'
                        padding='18px 48px'
                        mobileOptions='true'
                        fontSizeMobile='18px'
                        paddingMobile='12px 18px'
                        >Consultar planos</Button>
                </div>
                <img src={payments} />
        </InterestedStyle>
        </Container>
    )

}

export default Interested;