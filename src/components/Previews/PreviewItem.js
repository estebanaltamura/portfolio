import Carousel from 'react-bootstrap/Carousel';
import { v4 as randomId } from 'uuid'
import "./PreviewItem.css"

export const PreviewItem = ({ type, media })=>{    

  return(
    <div className={type == "desktop" ? "previewMediaDesktop" : "previewMediaMobile"} > 
      <div id={type} className="carousel slide">
        <div className="carousel-inner">         
          <>
            {
              media !== undefined && media.map((content, index)=>{
                if(index === 0){
                  return <div key={randomId()} className="carousel-item active">
                            {
                              content[0] === "img" ?
                                <img className={type == "desktop" ? "desktopPreviewImage previewImage mainPreviewImage" : "mobilePreviewImage previewImage mainPreviewImage"} src={media[0][1]} />
                                                :                                                
                                <iframe className={type == "desktop" ? "desktopPreviewImage previewImage mainPreviewImage" : "mobilePreviewImage previewImage mainPreviewImage"} src={media[0][1]} controls autoplay></iframe>
                            }
                          </div>
                }
                else return <div key={randomId()} className="carousel-item">
                              {
                              content[0] === "img" ?
                                <img className={type == "desktop" ? "desktopPreviewImage previewImage mainPreviewImage" : "mobilePreviewImage previewImage mainPreviewImage"} src={media[index][1]} />
                                                :
                                <iframe className={type == "desktop" ? "desktopPreviewImage previewImage mainPreviewImage" : "mobilePreviewImage previewImage mainPreviewImage"} src={media[index][1]} controls autoplay></iframe>
                              }
                            </div>

              })
            }
          </>
        </div>
      
        <button className="carousel-control-prev controlContainer-prev" type="button" data-bs-target={`#${type}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon controlIcon-prev" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next controlContainer-next" type="button" data-bs-target={`#${type}`} data-bs-slide="next">
          <span className="carousel-control-next-icon controlIcon-next" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span> 
        </button>
      </div>
    </div>
  )
}





