import React from "react"
import { Label } from "../styled/ProjectStyle"
import cropImageModule from "../hooks/cropImageModule"
import styled from "styled-components"
import CommonStyle from "../styled/CommonStyle";
const FileUploadComponent = () => {

    const handleLoadFile=(e)=>{
        const file = e.target.files[0]
        cropImageModule(file)    
    }
    return(
        <React.Fragment>
        <Title>🧩SLIDING PUZZLE🧩</Title>
        <LabelStyle htmlFor="file-upload">원하는 이미지를 업로드 하세요!</LabelStyle>
        <Input type="file" id="file-upload" accept="image/*" onChange={(e)=>{handleLoadFile(e)}}/>
        </React.Fragment>

    )
}
const Title = styled.h4`
    ${props => {
        return`
        font-size: ${props.fontSize ? props.fontSize :`${CommonStyle("titleFontSize")}`};
        font-weight: ${props.fontWeight ? props.fontWeight :`${CommonStyle("titleFontWeight")}`};
        margin:${props.margin ? props.margin :`${CommonStyle("titleMargin")}`};
        `
    }}
`

const LabelStyle = styled(Label)`
    border:${"2px solid #ff69b4"};
`

const Input = styled.input`
    display:none;
`
export default FileUploadComponent;