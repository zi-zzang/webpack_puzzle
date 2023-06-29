
import store from '../redux/reducer';

const useCropImage = (file) => {
  const reduxState = store.getState();
  const dispatch = store.dispatch;
  const puzzleSizeState = reduxState.number;
  const newImage = document.createElement("img");
  newImage.src = URL.createObjectURL(file);
  const tmpList = [];

  //퍼즐 생성
  newImage.onload = () => {
    const width = newImage.width / puzzleSizeState
    const height = newImage.height / puzzleSizeState
    for (let row = 0; row < puzzleSizeState; row++) {
      for (let col = 0; col < puzzleSizeState; col++) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          newImage,
          col * width,
          row * height,
          width,
          height,
          0,
          0,
          width,
          height
        );
        const src = canvas.toDataURL();
        tmpList.push({
          src,
          index: row * puzzleSizeState + col,
        });
      }
    }

    dispatch({type:"TILE", payload:tmpList});
    dispatch({type:"INITIAL_TILE", payload:[...tmpList]});

    dispatch({
      type: 'LOAD_FILE',
      payload: {
        file,
        newImage
      }
    });
    shuffleTileEvent()
  };


};
//퍼즐 셔플
  const shuffleTileEvent = ()=>{
    const reduxState = store.getState();
    const dispatch = store.dispatch;
    const puzzleSizeState = reduxState.number;
    let ok = false;
    let shuffleTile;
    const tileState = reduxState.tile;
    const emptyTileIndex = reduxState.emptyTile;
    while(!ok){
        let inversion = 0;
        
        const emptyIndex = tileState.find(v=>v.index === emptyTileIndex); // 빈배열값
        const emptyExcept = tileState.filter(e=>e.index !== emptyTileIndex) //빈배열값제외
        shuffleTile = emptyExcept.slice().sort(()=>Math.random()-Math.random()); //빈배열값 제외한 타일들만 셔플
        shuffleTile.push(emptyIndex) //빈배열 추가
        shuffleTile.forEach((item,index) =>{ //inversion 추가
            for(let i = index; i < shuffleTile.length; i++){
                if(item.index > shuffleTile[i].index){
                    inversion++;
                }
            }
        })
        console.log(shuffleTile)
        //퍼즐 사이즈가 홀수 일때
        if(puzzleSizeState % 2 !== 0){
            ok = true;
            if(inversion % 2 === 0){
                ok = true;
                console.log("1번째")
            }else{
                ok = false;
            }
        }
        //짝수일때
        else{
            const fromBottom = puzzleSizeState - Math.floor(shuffleTile.indexOf(emptyTileIndex)/ puzzleSizeState);
            console.log(fromBottom)
            if(fromBottom % 2 === 0 && inversion % 2 !== 0){
                ok = true;
                console.log("2번째")
            }
            if(fromBottom % 2 !== 0 && inversion % 2 === 0){
                ok = true;
                console.log("3번째")
            }
        }
        dispatch({type:"TILE", payload:shuffleTile});
    }
    return shuffleTile;
  }
export default useCropImage;