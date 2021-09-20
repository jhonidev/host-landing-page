import styled from "styled-components";
import svg from './uptime.svg';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const UptimeStyle = styled.div`
    margin-top:150px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align:right;

    .svg img {
        position:relative;
        left:-35px;
    }

    h2 {
        font-size:32px;
        font-weight: bold;
    }

    p {
        margin-top:25px;
        margin-bottom:25px;
        font-size:24px;
        color:#646464;
    }
    @media only screen and (max-width: 1250px) {
        .svg img {
            width:500px;
        }
        h2 {
            font-size:28px;
        }
        p {
            font-size:21px;
        }
    }

    @media only screen and (max-width: 800px) {
        .svg img {
            width:75%;
        }
    }


    @media only screen and (max-width: 900px) {
        flex-direction: column;
        text-align:center;
        h2 {
            margin-top:15px;
        }
        
        p {
            max-width:500px;
        }
    }
`;

function Uptime() {
    return(
        <Container>
            <UptimeStyle>
                <div className="svg">
                    <img src={svg} />
                </div>
                <div className="uptime-text">
                    <h2>We are 24/7 online</h2>
                    <p>When you are hosting with us, you have the guarantee that you'll be online 24hrs/day and available.</p>
                    <p>We have the better uptime in the market. Our uptime is 99,9% and we are always online.</p>
                </div>
            </UptimeStyle>
        </Container>
    )
}

export default Uptime;