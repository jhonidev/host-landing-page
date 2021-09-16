import styled from "styled-components";

const ButtonStyle = styled.div`

    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
    max-width: ${props => props.maxWidth};
    min-width: ${props => props.minWidth};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    transition: 0.5s;

    ${props => props.hover === 'true' ? `&:hover {cursor:pointer; background-color: ${props.hoverColor}; color: ${props.hoverTextColor};}` : ''}

    ${props => props.mobileOptions === 'true' ? `
    
        @media only screen and (max-width: 600px) {
            & {
                font-size: ${props.fontSizeMobile};
                padding: ${props.paddingMobile};
                min-width: fit-content;
            }
        }

    ` : ''}

`;



const handleClick = (actionType, action) => {
    switch(actionType) {
        case "click":
            action = !action;
            break;
        case "redirect":
            window.location.href = `${action}`;
            break;
        default:
    }
}

function Button(props) {

    const { 
        color = 'black',
        bgColor = 'white',
        padding = '18px 12px',
        fontSize = '21px',
        textAlign = 'center',
        maxWidth = 'none',
        minWidth = '0',
        useAction = false,
        action = '#',
        actionType = 'click',
        border = 'none',
        borderRadius = '0px',
        hover = 'false',
        hoverColor = '#000000',
        hoverTextColor = '#ffffff',
        mobileOptions = 'false',
        fontSizeMobile = '14px',
        paddingMobile = '12px 8px'
    } = props;

    return(
        <ButtonStyle
            color={color}
            bgColor={bgColor}
            padding={padding}
            fontSize={fontSize}
            textAlign={textAlign}
            maxWidth={maxWidth}
            minWidth={minWidth}
            action={action}
            border={border}
            borderRadius={borderRadius}
            hover={hover}
            hoverColor={hoverColor}
            hoverTextColor={hoverTextColor}
            mobileOptions={mobileOptions}
            fontSizeMobile={fontSizeMobile}
            paddingMobile={paddingMobile}

            onClick={() => {
                useAction && handleClick(actionType, action) }
            }
        >
            {props.children}
        </ButtonStyle>
    )

}

export default Button;