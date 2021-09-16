import styled from "styled-components";

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const StatsStyle = styled.div`

    margin-top:175px;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    justify-items:center;

    h2 {
        color:#4D61FC;
        font-size:128px;
    }

    p {
        position: relative;
        font-size:32px;
        color:#b2b6bb;
        top:-40px;
        left:35px;
    }

    @media only screen and (max-width: 1290px) {
        h2 {
            font-size:92px;
        }
        p {
            font-size:28px;
        }
    }

    @media only screen and (max-width: 900px) {
        h2{
            font-size:64px;
            margin-bottom:20px;
        }
        p {
            font-size:21px;
        }
    }

    @media only screen and (max-width: 715px) {
        flex-direction: column;
        h2 {
            font-size:92px;
        }
        p {
            font-size:28px;
        }
    }

`;

function Stats() {

    return(
        <Container>
            <StatsStyle>
                <div className="single-stats">
                    <h2>+2000</h2>
                    <p>customers</p>
                </div>
                <div className="single-stats">
                    <h2>+3500</h2>
                    <p>answered tickets</p>
                </div>
                <div className="single-stats">
                    <h2>+2800</h2>
                    <p>servers hosted</p>
                </div>
            </StatsStyle>
        </Container>        
    )

}

export default Stats;