import logo from "./logo.png";
import style from "./BigMenu.module.css";

function BigMenu() {
  const myList = ["Inicio", "Servicios", "Travels","Quienes somos", "Contacto"];

  const handleMenuClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado
    const targetId = e.target.getAttribute("href"); // Obtiene el ID de la sección objetivo
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className={style.Menu_header}>
        <div className={style.logoContainer}>
          <img src={logo} alt="Logo" className={style.logo} />
          {/* <p className={style.hotel}> HOTEL </p>
          <p className={style.onlyou}>ONLY YOU</p> */}
          <ul className={style.Menu_ul}>
            {myList.map((val, index) => (
              <li key={index} className={style.Menu_li}> 
                <a
                  href={`#${val.toLowerCase()}`}
                  onClick={handleMenuClick}
                  className={style.Menu_a}
                >
                  {val}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default BigMenu;
