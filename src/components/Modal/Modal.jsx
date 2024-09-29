import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, card }) {
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Guardar el ancho del scrollbar y añadir un relleno para bloquear el scroll
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      // Añadir la clase que bloquea el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Eliminar el relleno
      document.body.style.paddingRight = "";
      // Eliminar la clase que bloquea el scroll
      document.body.style.overflow = "";
    }

    return () => {
      // Limpiar los estilos cuando el componente se desmonte
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    } else if (card && card.images && card.images.length > 1) {
      setCurrentImageIndex(0); // Reset to first image on open
    }
  }, [isOpen, card]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Duration of the close animation
  };

  const handleNextImage = () => {
    if (card && card.images && card.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (card && card.images && card.images.length > 1) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + card.images.length) % card.images.length
      );
    }
  };

  if (!isOpen || !card) return null;

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.fadeOut : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.modalFadeOut : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={handlePreviousImage}
        >
          &lt;
        </button>
        <div className={styles.sliderContainer}>
          {card.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={card.title}
              className={`${styles.modalImage} ${
                index === currentImageIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={handleNextImage}
        >
          &gt;
        </button>
        <button className={styles.closeButton} onClick={handleClose}>
          <FaTimes />
        </button>
        <h2 className={styles.modalTitle}>{card.title}</h2>
        <p className={styles.modalText}>{card.text}</p>
      </div>
    </div>
  );
}

export default Modal;
