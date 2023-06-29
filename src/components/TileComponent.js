import React,{ useEffect } from "react"
import { tile,setEmptyTileIndex } from "../redux/action"
import { useDispatch, useSelector } from "react-redux";
import ThumbnailComponent from "./ThumbnailComponent";
import styled from "styled-components"

const TileComponent = () =>{

    const dispatch = useDispatch();

    //store에서 가져온 state
    const puzzleSizeState = useSelector(state=>state.number); 
    const tileState = useSelector(state=>state.tile)
    const emptyTileState = useSelector(state=>state.emptyTile)
    
    const tileClickEvent = (index) =>{
        
        const different = Math.abs(index-emptyTileState);
        if(different === 1 || different === puzzleSizeState){
            //tile값에 넣은 tmpList
            const tileArray = [...tileState]; //값복사
            //리스트를 다른 변수에 담기 위해서는 값복사 x 주소값복사 o
            [tileArray[index], tileArray[emptyTileState]] = [tileArray[emptyTileState], tileArray[index]];
            // setTile([...tileArray]);
            dispatch(tile([...tileArray]));
            // setemptyTileState(index)
            dispatch(setEmptyTileIndex(index))
            const isCorrect = tileArray.every((tile, i) => tile.index === i);
            if (isCorrect) {
              alert("정답입니다!");
            }
        }
    }

    useEffect(() => {
        // console.log(tileState)
      }, [tileState]);


        
    //함수에서는 무조건 데이터만,데이터에 따라서 화면 출력할지 말지는 렌더 부분에서
    return(
        <React.Fragment>
            <TileBox id="imgBox"
                puzzle={
                    puzzleSizeState === 3 
                    ? "puzzle3"
                    :puzzleSizeState === 4 
                    ? "puzzle4" 
                    : puzzleSizeState === 5 
                    ? "puzzle5"
                    : "puzzle3"
                    }
                >

                {tileState.map((v,i)=>{
                    const {src, index} = v;
                    return(
                        <Tiles
                        puzzle={
                            puzzleSizeState === 3 
                            ? "puzzle3"
                            :puzzleSizeState === 4 
                            ? "puzzle4" 
                            : puzzleSizeState === 5 
                            ? "puzzle5"
                            : "puzzle3"
                        }
                        key={i} src={src} id={index} onClick={()=>{tileClickEvent(i)}} visibility={`${i === emptyTileState ? "empty":"tile"}`}  alt="tile">
                        </Tiles>
                    )
                })}
            </TileBox>
            <ThumbnailComponent tileState={tileState}/>
        </React.Fragment>
    )
}

//styled-components

const TileBox = styled.div`
    ${(props)=>{
        return`
            width: ${props.width ? props.width : "fit-content"};
            margin: ${props.margin ? props.margin : "0 auto"};
            margin-top: ${props.marginTop ? props.marginTop: "20px"}; 
            margin-bottom: ${props.marginBottom ? props.marginBottom: "10px"};
            display : ${props.display ? props.display:"grid"};
            grid-template-columns : 
            ${
                props.puzzle === "puzzle3"
                ? "repeat(3,1fr)"
                : props.puzzle === "puzzle4"
                ? "repeat(4,1fr)"
                : props.puzzle === "puzzle5"
                ? "repeat(5,1fr)"
                : "repeat(3,1fr)"
            };
            grid-template-rows : 
            ${
                props.puzzle === "puzzle3"
                ? "repeat(3,1fr)"
                : props.puzzle === "puzzle4"
                ? "repeat(4,1fr)"
                : props.puzzle === "puzzle5"
                ? "repeat(5,1fr)"
                : "repeat(3,1fr)"
            };
        `
    }
}
`

const Tiles = styled.img`
    ${(props)=>{
        return`
            width: ${
                props.puzzle === "puzzle3"
                ? "150px"
                : props.puzzle === "puzzle4"
                ? "100px"
                : props.puzzle === "puzzle5"
                ? "90px"
                : "150px"
            };
            height: ${
                props.puzzle === "puzzle3"
                ? "150px"
                : props.puzzle === "puzzle4"
                ? "100px"
                : props.puzzle === "puzzle5"
                ? "90px"
                : "150px"
            };
            border:${props.border ? props.border : "1px solid #fff"};
            display:${props.display ? props.display : "flex"};
            flex: ${props.flex ? props.flex : "0 0 auto"};
            align-items: ${props.alignItems ? props.alignItems : "center"};
            justify-content: ${props.justifyContent ? props.justifyContent : "center"};
            user-select: ${props.userSelect ? props.userSelect : "none"};
            visibility : ${props.visibility === "tile" ? props.visibility : "hidden"};
        `
    }}
`

export default TileComponent;