import { previewsData } from "../../JSONs/JSONpreviews"

import { chosenProjectContext } from "../contexts/ChosenProject"
import { PreviewItem } from "./PreviewItem"
import { useContext, useEffect } from "react"
import "./PreviewsList.css"

export const PreviewsList = ()=>{

    const {currentProject} = useContext(chosenProjectContext)

    useEffect(()=>{
        console.log(currentProject)
    })

    return(
        <div className="previewsList">
            
            {
                currentProject.name !== "" &&                    
                        <>
                            <PreviewItem type="mobile" img={currentProject.project.mobilePreview} />
                            <p className="previewTitleMobile">Mobile</p>
                            <PreviewItem type="desktop" img={currentProject.project.desktopPreview} />
                            <p className="previewTitleDesktop">Desktop</p>
                            
                        </>                       
               
            }
        </div>
    )
}