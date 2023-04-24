import { useState, useEffect, useRef } from "react"
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import "./PreviewItem.css"

export const PreviewItem = ({type, img, poster})=>{

    const [isPlaying, setIsPlaying] = useState(false)

    const mobilePreview = useRef()

    useEffect(()=>{
        const mobilePreviewElementTop = mobilePreview.current.getBoundingClientRect().top
        
        window.scrollBy({
            left: 0,
            top: mobilePreviewElementTop - 120,
            behavior: "smooth",
        })            
    },[isPlaying])

    const playMobilePreview = (e)=>{
        e.stopPropagation()
        console.log("entro");
        if (isPlaying) {
          mobilePreview.current.pause();
        } else {
          mobilePreview.current.play();
        }
       
        setIsPlaying(!isPlaying);              
    }

    return(
        <div className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} onClick={playMobilePreview} >
            {
                !isPlaying ?
                     <BsFillPlayFill className={type == "desktop" ? "playDesktop" : "playIconMobile"} />
                           :
                    <BsFillPauseFill className={type == "desktop" ? "playDesktop" : "playIconMobile"} />
            }
            <video className={type == "desktop" ? "desktopVideo" : "mobileVideo"} ref={mobilePreview} src={img} poster={poster}/>       
        </div>
    )
}



