import React from "react"
import FileUploadComponent from "./components/FileUploadComponent";
import PuzzleSizeComponent from "./components/PuzzleSizeComponent";
import TileComponent from "./components/TileComponent";
const App = () =>{    
    return(
        <React.Fragment>
            <FileUploadComponent/>
            <PuzzleSizeComponent/>
            <TileComponent/>
        </React.Fragment>
    )
}

export default App;