import { useState, useEffect, useRef, useContext } from "react"
import { isLoadingPreviewVideosContext } from "../contexts/IsLoadingPreviewVideosProvider";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import "./PreviewItem.css"

export const PreviewItem = ({type, img, poster})=>{

    const [isPlaying, setIsPlaying] = useState(false)
    const {setIsLoadingPreviewVideos} = useContext(isLoadingPreviewVideosContext)
    const mobilePreview = useRef()

    useEffect(()=>{
        const mobilePreviewElementTop = mobilePreview.current.getBoundingClientRect().top
        
        window.scrollBy({
            left: 0,
            top: mobilePreviewElementTop - 120,
            behavior: "smooth",
        })            
    },[isPlaying])

    useEffect(()=>{
        setIsLoadingPreviewVideos(true)
        
    },[])

    const playMobilePreview = (e)=>{
        e.stopPropagation()
        
        if (isPlaying) {
          mobilePreview.current.pause();
        } else {
          mobilePreview.current.play();
        }
       
        setIsPlaying(!isPlaying);              
    }

    const posterLoadedHandler = ()=>{
        if (type === "desktop"){
            if (mobilePreview.current.readyState === 3 || mobilePreview.current.readyState ===4){
                setIsLoadingPreviewVideos(false)
                console.log("cargo o ya estaba cargada")           
            }
        } 
    }

    return(
        <div className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} onClick={playMobilePreview} >
            {
                !isPlaying ?
                     <BsFillPlayFill className={type == "desktop" ? "playDesktop" : "playIconMobile"} />
                           :
                    <BsFillPauseFill className={type == "desktop" ? "playDesktop" : "playIconMobile"} />
            }
            <video className={type == "desktop" ? "desktopVideo" : "mobileVideo"} ref={mobilePreview} src={img} poster={poster} onLoadedMetadata={posterLoadedHandler} />       
        </div>
    )
}



