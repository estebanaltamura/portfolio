import { createContext, useState } from "react"


export const isLoadingPreviewVideosContext = createContext()

export const IsLoadingPreviewVideosProvider = ({children})=>{

    const [isLoadingPreviewVideos, setIsLoadingPreviewVideos] = useState(true)
    return(
        <isLoadingPreviewVideosContext.Provider value={{isLoadingPreviewVideos, setIsLoadingPreviewVideos}}>
            {children}
        </isLoadingPreviewVideosContext.Provider>
    )
}

/*([true, true]) es ([desktop, mobile])*/ 