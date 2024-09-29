import React, { useState } from "react";
import styles from "./Cards.module.css";
import Modal from "../Modal/Modal";

function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock de imagenes para el renderizado principal.
  const cards = [
    {
      images: ["./i-image-1.jpg"],
      title: "Wi-Fi",
      text: "Wi-Fi de alta velocidad disponible en todo el hotel. Conexión segura para todos nuestros huéspedes. Acceso sencillo y confiable en cada habitación y áreas comunes.",
    },
    {
      images: ["./i-image-2.jpg"],
      title: "Atención VIP",
      text: "Desde el check-in hasta el check-out, nuestro personal está disponible para garantizar una estancia cómoda y agradable.",
    },
    {
      images: ["./i-image-3.jpg", "./i-image-4.jpg", "./i-image-5.jpg"],
      title: "Habitaciones",
      text: "Experimenta el lujo y confort de nuestras recamaras , donde la combinación perfecta de tradición y modernidad te ofrece una estancia inolvidable.",
    },

  ];

const handleCardClick = (card) => {
  setSelectedCard(card);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedCard(null);
};

  return (
    <div className={styles.cards} id="#servicios">
      
      {cards.map((card) => (    
        
        <div key={card.title} className={styles.card} onClick={() => handleCardClick(card)}>
          <img
            src={card.images[0]}
            alt={card.title}
            className={styles.card_image}
          />
          <div className={styles.card_content}>
            <h2 className={styles.card_title}>{card.title}</h2>
            <p className={styles.card_text}>{card.text}</p>
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} card={selectedCard}/>
    </div>
  );
}

export default Cards;