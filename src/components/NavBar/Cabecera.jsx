import React, { useState } from "react";
import style from "./Cabecera.module.css";
import logo from "./logo.png"

const Cabecera = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleScrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setMenu(false); // Cierra el menú después de hacer click en el item.
      }
  }

    return (
        <header className={style.Cabecera}>
            <h1 className={style.Cabecera_h1}>
                <a href="" className={style.Cabecera_a}>
                    <img src={logo} alt="logo" className={style.Cabecera_img} />
                    {/* <p>ONLY YOU HOTEL</p>
                    <p>HOTEL && TRIPS</p> */}
                </a>
            </h1>

            <button onClick={toggleMenu} className={style.Cabecera_button}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={style.Cabecera_svg}
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>

            <nav className={`${style.Cabecera_nav} ${menu ? style.isActive : ""}`}>
                <ul className={style.Cabecera_ul}>
                    <li className={style.Cabecera_li} onClick={() => handleScrollToSection('#inicio')}>
                        <a className={style.Cabecera_a}>Inicio</a>
                    </li>
                    <li className={style.Cabecera_li} onClick={() => handleScrollToSection('#servicios')}>
                        <a className={style.Cabecera_a}>Servicios</a>
                    </li>
                    <li className={style.Cabecera_li} onClick={() => handleScrollToSection('#travels')}>
                        <a className={style.Cabecera_a}>Travels</a>
                    </li>
                    <li className={style.Cabecera_li} onClick={() => handleScrollToSection('#quienes somos')}>
                        <a className={style.Cabecera_a}>Quienes Somos</a>
                    </li>
                    <li className={style.Cabecera_li} onClick={() => handleScrollToSection('#contacto')}>
                        <a className={style.Cabecera_a}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Cabecera;
