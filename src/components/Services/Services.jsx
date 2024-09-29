import React from "react";
import style from "./Services.module.css";
import { image_1, image_5, image_3, image_6, image_7, tick } from "./index.js";
// import { FaWhatsapp } from "react-icons/fa";

function Services() {
  return (
    <div className={style.Reasons} >
      <div className={style.left_reasons}>
        <img src={image_1} alt="" />
        <img src={image_7} alt="" />
        <img src={image_3} alt="" />
        <img src={image_6} alt="" />
      </div>
      <div className={style.right_reasons}>
        <span>Destino Santa Marta - San Sebas 🔛 San Sebas - Santa Marta </span>

        <div>
          <span className={style.stroke_text}> Viaja con </span>
          <span>Nosotros</span>
        </div>
        <div className={style.details_right}>
        <div>
            <img src={tick} alt="" />
            <span>Aire Acondicionado</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> Comodo</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Puerta a puerta</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span> Seguro y confiable</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span> Siempre a tiempo</span>
          </div>

          <div>
            <a className={style.btn} href="#">Contacto</a>
          </div>        

        </div>
      </div>
    </div>
  );
}

export default Services;
