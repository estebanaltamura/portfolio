import { useRef, useContext } from "react";
import { IsLoadingProjectPreviewContext } from "../../contexts/IsLoadingProjectPreviewContextProvider";
import { PreviewsList } from "./PreviewsList"
import { BsArrowReturnRight } from "react-icons/bs";
import spinnerUrl from '../../assets/spinner.gif';
import "./PreviewsListContainer.css"

export const PreviewsListContainer = ()=>{

  const { isLoadingProjectPreview, setIsLoadingProjectPreview } = useContext(IsLoadingProjectPreviewContext) 

  const previewImagesLoadedCounterRef = useRef(0)

  const onLoadPreviewImagesHandler = (event)=>{
    if(event.target.classList.value.includes("mainPreviewMedia")){      
      previewImagesLoadedCounterRef.current += 1
    }
    if(previewImagesLoadedCounterRef.current === 2){
      setIsLoadingProjectPreview(false)
      previewImagesLoadedCounterRef.current = 0
    }
  } 

  return(      
    <div className="previewListContainer" onLoad={onLoadPreviewImagesHandler}>
      <BsArrowReturnRight className="subItemIcon"/>
      <h2 className="previewsTitle">Vista previa</h2>
      {     
        <div className={isLoadingProjectPreview === true  ? "spinnerContainer" : "hidden"}>
          <img src={spinnerUrl} className="spinner" />
        </div>   
        
      }      
      <PreviewsList isLoading={isLoadingProjectPreview} />            
    </div> 
         
      
     
  )
}