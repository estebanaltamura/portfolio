import Carousel from 'react-bootstrap/Carousel';
import { v4 as randomId } from 'uuid'
import "./PreviewItem.css"

export const PreviewItem = ({ type, imgs })=>{    

  return(
    <div className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} > 
      <div id={type} class="carousel slide">
        <div class="carousel-inner">         
          <>
            {
              imgs !== undefined && imgs.map((img, index)=>{
                if(index === 0){
                  return <div class="carousel-item active"><img className={type == "desktop" ? "desktopPreviewImage previewImage" : "mobilePreviewImage previewImage"} src={imgs[0]}/></div>
                }
                else return <div class="carousel-item"><img className={type == "desktop" ? "desktopPreviewImage previewImage" : "mobilePreviewImage previewImage"} src={imgs[index]}/></div>

              })
            }
          </>
        </div>
      
        <button class="carousel-control-prev controlContainer-prev" type="button" data-bs-target={`#${type}`} data-bs-slide="prev">
          <span class="carousel-control-prev-icon controlIcon-prev" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next controlContainer-next" type="button" data-bs-target={`#${type}`} data-bs-slide="next">
          <span class="carousel-control-next-icon controlIcon-next" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span> 
        </button>
      </div>
    </div>
  )
}





