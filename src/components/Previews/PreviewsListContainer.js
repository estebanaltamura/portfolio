import { PreviewsList } from "./PreviewsList"
import "./PreviewsListContainer.css"
import { BsArrowReturnRight } from "react-icons/bs";


export const PreviewsListContainer = ()=>{
    return(
        <div className="previewListContainer">
            <BsArrowReturnRight className="subItemIcon"/>
            <h2 className="previewsTitle">Previews</h2>
            
                <PreviewsList />
            
        </div>
    )
}