import { useRef, useContext, useEffect } from "react";

import { PreviewsList } from "./PreviewsList"
import { BsArrowReturnRight } from "react-icons/bs";
import "./PreviewsListContainer.css"


export const PreviewsListContainer = ()=>{
    return(
        <div className="previewListContainer">
            <BsArrowReturnRight className="subItemIcon"/>
            <h2 className="previewsTitle">Previews</h2>    
                <PreviewsList />            
        </div>
    )
}