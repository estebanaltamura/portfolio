import { createContext, useState } from "react"

export const previewsLoadingContext= createContext()


export const PreviewsLoadingProvider = ({children})=>{

    const [isLoadingPreviews, setIsLoadingPreviews] = useState([true, true])
    //isLoadingPreviews es [desktop, mobile] 

    return(
        <previewsLoadingContext.Provider value={{isLoadingPreviews, setIsLoadingPreviews}} >
            {children}
        </previewsLoadingContext.Provider>
    )
} 