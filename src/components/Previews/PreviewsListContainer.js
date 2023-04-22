import { useRef, useContext, useEffect } from "react";
import { previewsLoadingContext } from "../contexts/PreviewsLoadingProvider";
import { PreviewsList } from "./PreviewsList"
import { BsArrowReturnRight } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';
import "./PreviewsListContainer.css"


export const PreviewsListContainer = ()=>{

    const spinner = useRef()
    const previewListContainer2 = useRef()
    const {isLoadingPreviews, setIsLoadingPreviews} = useContext(previewsLoadingContext)

    useEffect(()=>{
        if (isLoadingPreviews[0] === false && isLoadingPreviews[1] === false){
            spinner.current.classList.add("hidden")
            previewListContainer2.current.classList.remove("hidden")
        } 
        else if (isLoadingPreviews[0] === true && isLoadingPreviews[1] === true){
            spinner.current.classList.remove("hidden")
            previewListContainer2.current.classList.add("hidden")
        } 
        
    },[isLoadingPreviews])

    return(

        <div className="previewListContainer">

            <BsArrowReturnRight className="subItemIcon"/>
            <h2 className="previewsTitle">Previews</h2>            
            <Spinner className="spinnerPreview" animation="border" role="status" ref={spinner}>                      
            </Spinner> 

            <div className="hidden" ref={previewListContainer2}>
                <PreviewsList />
            </div>
            
        </div>
    )
}