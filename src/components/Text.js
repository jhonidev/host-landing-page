import styled from "styled-components";

const TextStyle = styled.div`

    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight:  ${props => props.fontWeight};
    margin-top:  ${props => props.marginTop};
    text-align: ${props => props.textAlign};
    max-width:  ${props => props.maxWidth};
    padding: ${props => props.padding};

    ${props => props.mobileOptions === 'true' ? `
    
        @media only screen and (max-width: 600px) {
            & {
                font-size: ${props.mobileFontSize};
                text-align: ${props.mobileAlign};
            }
        }

    ` : ''}

`;

function Text(props) {

    const { 
        color = '#000000',
        fontSize = '21px',
        fontWeight = '400',
        marginTop = '0px',
        textAlign = 'center',
        maxWidth = 'none',
        mobileOptions = 'false',
        mobileFontSize = '16px',
        mobileAlign = 'center',
        padding = '0px 18px'
    } = props;

    return(
        <TextStyle
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
            marginTop={marginTop}
            maxWidth={maxWidth}
            mobileOptions={mobileOptions}
            mobileFontSize={mobileFontSize}
            mobileAlign={mobileAlign}
            padding={padding}
        >
            {props.children}
        </TextStyle>
    )

}

export default Text;