import { useContext } from "react"
import { CurrentProyectSelectedContext } from "../../contexts/CurrentProyectSelectedContextProvider"
import { PreviewItem } from "./PreviewItem"
import "./PreviewsList.css"

export const PreviewsList = ({ isLoading})=>{
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext) 
  
  return(   
    <>  
      <div className={isLoading === true ? "hidden" : "previewsList"} key={currentProyectSelected.name}>                             
              <PreviewItem type="mobile" img={currentProyectSelected.project.mobilePreview} />
              <p className="previewTitleMobile">Mobile</p>
              <PreviewItem type="desktop" img={currentProyectSelected.project.desktopPreview} />
              <p className="previewTitleDesktop">Desktop</p>      
      </div>
      <p className="noDesktopPreviewMessage">*La preview desktop de este proyecto se puede ver en el portfolio en su version de escritorio</p>
    </>
  )
}

//previewsList