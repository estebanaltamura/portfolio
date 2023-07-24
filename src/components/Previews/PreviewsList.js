import { useContext, useRef, useEffect } from "react"
import { chosenProjectContext } from "../../contexts/ChosenProject"
import { isLoadingPreviewVideosContext } from "../../contexts/IsLoadingPreviewVideosProvider" 
import { PreviewItem } from "./PreviewItem"
import Spinner from 'react-bootstrap/Spinner';
import "./PreviewsList.css"

export const PreviewsList = ()=>{

    const {currentProject} = useContext(chosenProjectContext)
    const { isLoadingPreviewVideos } = useContext(isLoadingPreviewVideosContext)
    const previewsList = useRef()
    const spinnerPreviewList = useRef()

    useEffect(()=>{
        if (isLoadingPreviewVideos === false){
            spinnerPreviewList.current.classList.add("spinnerContainer", "hidden")
            previewsList.current.classList.replace("hidden", "previewsList")
        } 
        else if (isLoadingPreviewVideos === true){
            spinnerPreviewList.current.classList.replace("hidden", "spinnerContainer")
            previewsList.current.classList.replace("previewsList", "hidden")
        } 
        
    },[isLoadingPreviewVideos])
     

    return(        

        <>  
            <div className="spinnerContainer"  ref={spinnerPreviewList}>
                <Spinner animation="border" role="status">      
                </Spinner>
            </div>

            <div className="hidden" ref={previewsList}>                
                {
                    currentProject.name !== "" &&                    
                            <>                                
                                <PreviewItem type="mobile" img={currentProject.project.mobilePreview} poster={currentProject.project.mobilePreviewPoster}/>
                                <p className="previewTitleMobile">Mobile</p>
                                <PreviewItem type="desktop" img={currentProject.project.desktopPreview} poster={currentProject.project.desktopPreviewPoster}/>
                                <p className="previewTitleDesktop">Desktop</p>
                                
                            </>                       
                
                }

            </div>
            <p className="noDesktopPreviewMessage">*La preview desktop de este proyecto se puede ver en el portfolio en su version de escritorio</p>
        </>
    )
}

//previewsList