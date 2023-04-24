import { chosenProjectContext } from "../contexts/ChosenProject"
import { PreviewItem } from "./PreviewItem"
import { useContext } from "react"
import "./PreviewsList.css"

export const PreviewsList = ()=>{

    const {currentProject} = useContext(chosenProjectContext)
     
    return(
        <>
            <div className="previewsList">
                
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