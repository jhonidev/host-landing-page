import styled from "styled-components";
import Text from '../Text';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const FeaturesStyle = styled.div`

    width:100%;
    margin-top:85px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;

    h2 {
        font-size:28px;
        font-weight:bold;
    }

    .purple-squad {
        width:85px;
        height:85px;
        background-color:#4E69FF;
        border-radius:10px;
    }

    .feature-text {
        margin-left:15px;
    }

    .features {
        width:100%;
        margin-top:50px;
    }

    .single-feature {
        display:flex;
        align-items:center;
        justify-content: flex-start;
        margin-right:25px;
    }

    .row {
        display:flex;
        justify-content: space-between;
    }

    @media only screen and (max-width: 750px) {
        .single-feature{
            display:flex;
            align-items: center;
            flex-direction:column;
        }
        .feature-text {
            margin-top:10px;
            margin-left:0px;
            text-align:center;
        }
    }

    .features-row {
        display:flex;
        justify-content: space-between;
    }

    .features-row:first-child {
        margin-bottom:35px;
    }

    .feature-text h3 {
        font-weight:600;
        font-size:21px;
        margin:0;
    }

    .feature-text p {
        color:#646464;
        font-size:16px;
        max-width:260px;
        margin:0;
    }
    @media only screen and (max-width: 975px) {
        .feature-text h3 {
            font-size:18px;
        }
        .feature-text p {
            font-size:14px;
        }
        .purple-squad {
            width:65px;
            height:65px;
        }
    }
`;

function Features() {

    return(
        <Container>
        <FeaturesStyle>
        <h2>Our features</h2>
        <div className="features">
            <div className="features-row">
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
            </div>
            <div className="features-row">
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
                <div className="single-feature">
                    <div className="purple-squad"></div>
                    <div className="feature-text">
                    <h3>High End Hardware</h3>
                    <p>We only work with the best possible quality hardware</p>
                    </div>
                </div>
            </div>
        </div>
        </FeaturesStyle>
        </Container>
    )

}

export default Features;