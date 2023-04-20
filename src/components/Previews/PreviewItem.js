import "./PreviewItem.css"

export const PreviewItem = ({type, img})=>{
    return(
        <>

        <img className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} src={img}/>
        
        </>
    )
}

