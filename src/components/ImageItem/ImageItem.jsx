/* eslint-disable react/prop-types */
import "../Gallery/Gallery.scss"
function ImageItem({image,openLightbox,currentImage}) {
    return (
        <div className="gallery-item">
          <img  src={image} alt="" className="w-100" style={{height:"400px"}} onClick={() => openLightbox(currentImage)}
        loading="lazy" />  
        </div>
    )
}

export default ImageItem
