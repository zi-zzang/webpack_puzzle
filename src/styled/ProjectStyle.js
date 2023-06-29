import styled from "styled-components"
import CommonStyle from "./CommonStyle";


const Button = styled.button`
    ${props => {
        return`
            background-color:${props.backgroundColor ? props.backgroundColor: `${CommonStyle("btnColor")}`};
            padding:${props.padding ? props.padding :`${CommonStyle("btnPadding")}`};
            margin:${props.margin ? props.margin : `${CommonStyle("btnMargin")}`};
            font-size: ${props.fontSize ? props.fontSize :`${CommonStyle("btnFontSize")}`};
            border-radius: ${props.borderRadius ? props.borderRadius:`${CommonStyle("btnBorderRadius")}`};
            cursor: ${props.cursor ? props.cursor : `${CommonStyle("btnCursor")}`};
            display:${props.display === "none" ? "none": "inline-block"}
        `
    }}
`
const Label = styled.label`
    ${props =>{
        return`
        background-color:${props.backgroundColor ? props.backgroundColor: `${CommonStyle("btnColor")}`};
        padding:${props.padding ? props.padding :`${CommonStyle("btnPadding")}`};
        margin:${props.margin ? props.margin : `${CommonStyle("btnMargin")}`};
        font-size: ${props.fontSize ? props.fontSize :`${CommonStyle("btnFontSize")}`};
        border-radius: ${props.borderRadius ? props.borderRadius:`${CommonStyle("btnBorderRadius")}`};
        cursor: ${props.cursor ? props.cursor : `${CommonStyle("btnCursor")}`};
        `
    }}
`

export { Button, Label};