import { useContext } from "react";
import { previewsLoadingContext } from "../contexts/PreviewsLoadingProvider";
import "./PreviewItem.css"

export const PreviewItem = ({type, img})=>{

    const {setIsLoadingPreviews} = useContext(previewsLoadingContext)

    const onLoadPreviewMediaHandler= ()=>{
        console.log(type);

        if (type === "desktop") {
            setIsLoadingPreviews((prevState) => [false, prevState[1]]);
        } 
        
        else if (type === "mobile") {
            setIsLoadingPreviews((prevState) => [prevState[0], false]);
        }
    }

    return(
        <img className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} src={img}  onLoad={onLoadPreviewMediaHandler}/>       
    )
}

