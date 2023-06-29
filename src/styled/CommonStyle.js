const CommonStyle = (value) =>{
    const colors = {
        "major":"#FFDEF6"
    }

    const button = {
        "btnColor":"#FFDEF6",
        "btnBorderRadius":"5px",
        "btnMargin":"20px 5px",
        "btnFontSize":"20px",
        "btnPadding":"5px 10px",
        "btnCursor":"pointer",
    }

    const title = {
        "titleFontSize":"2em",
        "titleFontWeight":"bold",
        "titleMargin":"10px"
    }

    const input = {
        "inputMargin":"10px",
        "inputPadding":"3px"
    }

    if(value === "major"){
        return colors.major
    }

    //button
    if(value === "btnColor"){
        return button.btnColor;
    }else if(value === "btnBorderRadius"){
        return button.btnBorderRadius;
    }else if(value === "btnMargin"){
        return button.btnMargin;
    }else if(value === "btnFontSize"){
        return button.btnFontSize;
    }else if(value === "btnPadding"){
        return button.btnPadding;
    }else if(value === "btnCursor"){
        return button.btnCursor;
    }

    //title
    if(value === "titleFontSize"){
        return title.titleFontSize;
    }
    else if(value === "titleFontWeight"){
        return title.titleFontWeight;
    }else if(value === "titleMargin"){
        return title.titleMargin;
    }

    //input
    if(value === "inputMargin"){
        return input.inputMargin;
    }else if(value === "inputPadding"){
        return input.inputPadding;
    }
}

export default CommonStyle;