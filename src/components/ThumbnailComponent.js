import React from "react"
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { tile } from "../redux/action"
import { Button } from "../styled/ProjectStyle"
// import { BottomBox,ThumbnailImg } from "./styled/TileStyle";
import image from '../assets/bear.jpg'

const ThumbnailComponent = (props) => {
    const {tileState} = props;
    const thumbnail = useSelector(state=>state.thumbnail)
    const dispatch = useDispatch()
    
    const restart = () =>{
        document.getElementById("file-upload").value = '';
        document.getElementById("thumbnail").src = '';
        dispatch(tile([]))
    }

    return (
            <BottomBox>
                <ButtonStyle onClick={restart} display={`${tileState.length === 0?"none":"block"}`}>이미지 제거</ButtonStyle>
                {
                thumbnail && <ThumbnailImg src={thumbnail.src} alt="thumbnail" id="thumbnail" display={`${tileState.length === 0 ? "none":"block"}`}></ThumbnailImg>
            }
            </BottomBox>
    )
    
}

const BottomBox = styled.div`
    ${props=>{
        return`
            display:${props.display ? props.display : "flex"};
            flex-direction:${props.flexDirection ? props.flexDirection : "column"};
            align-items:${props.alignItems ? props.alignItems : "center"};
            justify-content: ${props.justifyContent ? props.justifyContent : "center"};
        `
    }}
`

const ButtonStyle = styled(Button)`
    border:${"2px solid #ff69b4"};
`

const ThumbnailImg = styled.img`
    ${props => {
        return`
            width: ${props.width ? props.width : "150px"};
            height: ${props.height ? props.height : "150px"};
            display:${props.display === "none" ? "none": "inline-block"}
        `
    }}
`
export default ThumbnailComponent;