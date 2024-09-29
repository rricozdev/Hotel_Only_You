import styles from "./HomePage.module.css"; 
function HomePage() {
  const handleMenuClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado
    const targetId = e.target.getAttribute("href").substring(0); // Obtiene el ID de la sección objetivo
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container} id="#inicio">
      <section className={styles.presentation}>
        <h2 className={styles.title}>
          <span className={styles.strokeText}>ONLY </span>
          <span > YOU</span>
        </h2>
        <span className={styles.brandName}>HOTEL & TRAVELS</span>
        <p>
          El hotel que acoge a sus visitantes, brindándo una experiencia única, aquí encontrarás  aventuras, emociones y descanso.
        </p>
        <a
          href="#contacto"
          className={styles.ctaButton}
          onClick={handleMenuClick}
        >
          Más información
        </a>
      </section>
    </div>
  );
}

export default HomePage;
