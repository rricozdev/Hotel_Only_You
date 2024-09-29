import React from 'react';
import styles from './SecretaryMessage.module.css'; // Importa los estilos CSS modulares
import SecretariaImage from './secretary.jpg'; // Importa la imagen de la secretaria
import Form from '../Form/Form'; 


const SecretaryMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secretaria}>
        <img src={SecretariaImage} alt="Secretaria" className={styles.secretariaImage} />
      </div>
      <div className={styles.message}>
        <p>
          ¿Necesitas un lugar donde hospedarte durante tu viaje o tienes alguna pregunta? ¡No dudes en contactarnos! Responderemos tu mensaje a la mayor brevedad posible.
        </p>
      </div>
        <Form />
    </div>
  );
};

export default SecretaryMessage;
