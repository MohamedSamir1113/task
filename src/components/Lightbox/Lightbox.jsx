/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Modal from 'react-modal';
import './Lightbox.scss';

Modal.setAppElement('#root');

const Lightbox = ({ images, currentImage, closeLightbox, setCurrentImage }) => {
    // Check if the document is in RTL mode
    const isRTL = document.dir === 'rtl';

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        // Adjust arrow navigation based on RTL mode
        if (e.key === (isRTL ? 'ArrowLeft' : 'ArrowRight')) nextImage();
        if (e.key === (isRTL ? 'ArrowRight' : 'ArrowLeft')) prevImage();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentImage, isRTL]);

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeLightbox}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div className="lightbox">
                <button className="close-button" onClick={closeLightbox}>✕</button>
                <img src={images[currentImage]} className="lightbox-image" alt="lightbox" />
                {/* Adjust button behavior and text for RTL */}
                <button className="prev-button" onClick={prevImage}>
                    {isRTL ? '›' : '‹'}
                </button>
                <button className="next-button" onClick={nextImage}>
                    {isRTL ? '‹' : '›'}
                </button>
            </div>
        </Modal>
    );
};

export default Lightbox;
