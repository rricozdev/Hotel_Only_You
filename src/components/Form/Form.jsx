// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import styles from './Form.module.css';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

// const Form = () => {
//   const form = useRef();
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [mensaje, setMensaje] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_4ionx8j', 'template_a3yhtw9', form.current, {
//         publicKey: 'hPB3Pf7X6OIt_FHCz',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           MySwal.fire({
//             icon: 'success',
//             title: 'Mensaje enviado correctamente',
//             timer: 8000,
//             showConfirmButton: true
//           });
//           // Limpiar los campos del formulario
//           setNombre('');
//           setEmail('');
//           setPhone('');
//           setMensaje('');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           MySwal.fire({
//             icon: 'error',
//             title: 'Ocurrió un error al enviar el mensaje',
//             timer: 8000,
//             showConfirmButton: true
//           });
//           // Limpiar los campos del formulario
//           setNombre('');
//           setEmail('');
//           setPhone('');
//           setMensaje('');
//         },
//       );
//   };

//   return (
//     <div className={styles.formularioContainer} id='#contacto'>
//       <h2>Contacto</h2>
//       <form ref={form} onSubmit={sendEmail} className={styles.formulario}>
//         <div className={styles.formGroup}>
//           <label htmlFor="nombre"></label>
//           <input
//             type="text"
//             id="nombre"
//             name="user_name"
//             className={styles.inputField}
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//             required
//             placeholder="Tu nombre"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email"></label>
//           <input
//             type="email"
//             id="email"
//             name="user_email"
//             className={styles.inputField}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Tu correo electrónico"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="phone"></label>
//           <input
//             type="text"
//             id="phone"
//             name="user_phone"
//             className={styles.inputField}
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             placeholder="Tu número de contacto"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="mensaje"></label>
//           <textarea
//             id="mensaje"
//             name="message"
//             className={styles.textArea}
//             value={mensaje}
//             onChange={(e) => setMensaje(e.target.value)}
//             required
//             placeholder="Tu mensaje..."
//           ></textarea>
//         </div>
//         <button type="submit" className={styles.submitButton}>
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import styles from "./Form.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState(""); // Para manejar el estado del envío

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_name", nombre);
    formData.append("user_email", email);
    formData.append("user_phone", phone);
    formData.append("message", mensaje);

    try {
      // Reemplaza con tu Form ID de Formspree
      // const response = await fetch("https://formspree.io/f/mvgpyydq", {
      //   method: "POST",
      //   body: formData,
      //   headers: {
      //     Accept: "application/json",
      //   },
      // });
      const response = await fetch("https://formspree.io/f/xldrqwkb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("SUCCESS!");
        MySwal.fire({
          icon: "success",
          title: "Mensaje enviado correctamente",
          timer: 8000,
          showConfirmButton: true,
        });
        // Limpiar los campos del formulario
        setNombre("");
        setEmail("");
        setPhone("");
        setMensaje("");
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
        MySwal.fire({
          icon: "error",
          title: "Ocurrió un error al enviar el mensaje",
          timer: 8000,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
      MySwal.fire({
        icon: "error",
        title: "Ocurrió un error al enviar el mensaje",
        timer: 8000,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className={styles.formularioContainer} id="#contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre"></label>
          <input
            type="text"
            id="nombre"
            name="user_name"
            className={styles.inputField}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Tu nombre"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="user_email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            name="user_phone"
            className={styles.inputField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Tu número de contacto"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensaje"></label>
          <textarea
            id="mensaje"
            name="message"
            className={styles.textArea}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            placeholder="Tu mensaje..."
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Form;
