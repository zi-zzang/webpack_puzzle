export const puzzleSize = (i) =>{
    return {
        "type": "PUZZLE_SIZE",
        payload : i
    }
}

export const tile = (i) => {
    return {
        "type": "TILE",
        payload : i
    }
}

export const initialTile = (i) =>{
    return {
        "type": "INITIAL_TILE"
        // payload : i
    }
}

export const setEmptyTileIndex = (i) => {
    return{
        "type": "SET_EMPTY_TILE_INDEX",
        payload : i
    }
}


