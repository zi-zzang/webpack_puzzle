import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { puzzleSize } from "../redux/action"
import { Button } from "../styled/ProjectStyle"
import cropImageModule from "../hooks/cropImageModule";
import styled from "styled-components";

// import useTileShuffle  from "./hooks/useTileShuffle"
const PuzzleSizeComponent = () =>{
    const fileState = useSelector(state=>state.file)
    const dispatch = useDispatch();

    const setPuzzleSize = (i) =>{
        dispatch(puzzleSize(i))
        cropImageModule(fileState)
    }

    return(
        <div>
            <ButtonStyle onClick={()=>{setPuzzleSize(3)}}>3 x 3</ButtonStyle>
            <ButtonStyle onClick={()=>{setPuzzleSize(4)}}>4 x 4</ButtonStyle>
            <ButtonStyle onClick={()=>{setPuzzleSize(5)}}>5 x 5</ButtonStyle>
        </div>
    )
}


const ButtonStyle = styled(Button)`
    border:${"2px solid #ff69b4"};
`
export default PuzzleSizeComponent;