import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initState = {
    "number" : 3,
    "tile" : [],
    "initialTile" : [],
    "emptyTile" : 8,
    "file": null,
    "thumbnail":null
}

const reducer = (state = initState,action) => {

    if(action.type === "PUZZLE_SIZE"){
        return{
            ...state,
            "number": action.payload,
            "emptyTile": action.payload * action.payload - 1
        }
    }else if(action.type === "TILE"){
        return{
            ...state,
            "tile":action.payload
        }
    }else if(action.type === "INITIAL_TILE"){
        return{
            ...state,
            "initialTile":[]
        }
    }else if (action.type === "SET_EMPTY_TILE_INDEX"){
        return{
            ...state,
            "emptyTile":action.payload
        }
    }else if(action.type === "LOAD_FILE"){
        return{
            ...state,
            "file": action.payload.file,
            "thumbnail":action.payload.newImage
        }
    }
    else {
        return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;