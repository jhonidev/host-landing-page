import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import Text from '../Text';

const FeaturesStyle = styled.div`

    margin-top:85px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;

    .purple-squad {
        width:85px;
        height:85px;
        background-color:#4E69FF;
        border-radius:10px;
    }

    .features {
        margin-top:50px;
    }

    .single-feature {
        display:flex;
        align-items:center;
    }

    .feature-text {
        margin-left:15px;
    }

    .row {
        display:flex;
        justify-content: space-between;
    }

    @media only screen and (max-width: 745px) {
        .feature-text {
            margin-left:0px;
        }
        .single-feature{
            display:flex;
            flex-direction:column;
        }
    }

    .features-row {
        display:flex;
    }

`;

function Features() {

    return(
        <FeaturesStyle>
            <Text color='#000' fontWeight='700' fontSize='32px'>Our features</Text>
            <div className="features">
                <div className="features-row">

                        <div className="single-feature">
                            <div className="purple-squad"></div>
                            <div className="feature-text">
                                <Text color='#000' fontSize='21px' fontWeight='600'>High End Hardware</Text>
                                <Text color='#646464' fontSize='16px' fontWeight='400' maxWidth='260px'>We only work with the best possible quality hardware</Text>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="purple-squad"></div>
                            <div className="feature-text">
                                <Text color='#000' fontSize='21px' fontWeight='600'>High End Hardware</Text>
                                <Text color='#646464' fontSize='16px' fontWeight='400' maxWidth='260px'>We only work with the best possible quality hardware</Text>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="purple-squad"></div>
                            <div className="feature-text">
                                <Text color='#000' fontSize='21px' fontWeight='600'>High End Hardware</Text>
                                <Text color='#646464' fontSize='16px' fontWeight='400' maxWidth='260px'>We only work with the best possible quality hardware</Text>
                            </div>
                        </div>

                </div>
            </div>
        </FeaturesStyle>
    )

}

export default Features;