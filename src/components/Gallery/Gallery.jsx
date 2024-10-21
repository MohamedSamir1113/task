import img1 from "../../assets/pexels-photo-92633.jpeg"
import img2 from "../../assets/portfolio-1.jpg"
import img3 from "../../assets/portfolio-4.jpg"
import img4 from "../../assets/portfolio-3.jpg"
import img5 from "../../assets/shutterstock_277750193.jpg"
import img6 from "../../assets/services.jpg"
import './Gallery.scss';
import ImageItem from "../ImageItem/ImageItem"
import { useState } from "react"
import Lightbox from "../Lightbox/Lightbox"
function Gallery() {
    const imageList = [img1, img2, img3, img4, img5,img6]
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    }; return (
        <>
            <div className="gallery-grid">
                {imageList.map((image, index) => (
                    <ImageItem key={index} currentImage={index} image={image} openLightbox={openLightbox} />
                ))}
            </div>
            {isOpen && (
                <Lightbox images={imageList} currentImage={currentImage} setCurrentImage={setCurrentImage} closeLightbox={closeLightbox} />
            )}
            
        </>

    )
}

export default Gallery
