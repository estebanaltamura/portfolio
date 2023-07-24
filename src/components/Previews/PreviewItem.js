import "./PreviewItem.css"

export const PreviewItem = ({ type, img })=>{    

  return(
    <div className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} >      
      <img className={type == "desktop" ? "desktopPreviewImage previewImage" : "mobilePreviewImage previewImage"} src={img} />       
    </div>
  )
}



