import React, { useState, useEffect } from "react";
import AboutUs from "./components/About/AboutUs";
import Cards from "./components/Cards/Cards";
import Services from "./components/Services/Services";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Footer from "./components/Footer/Footer";
import SecretariaMessage from "./components/SecretaryMessage/SecretaryMessage";
import Title from "./components/Title/Title";
import HomePage from "./views/HomePage/HomePage";
import BigMenu from "./components/NavBar/BigMenu";
import Cabecera from "./components/NavBar/Cabecera";
import Travels from "./components/Travels/Travels";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el punto de quiebre según sea necesario
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica el tamaño inicial de la ventana al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {isMobile ? <Cabecera /> : <BigMenu />}
       
      <HomePage />
      <Title />
      <Cards />
      <Travels />
      <Services />
      <AboutUs />
      <SecretariaMessage />
      <FloatingButton />
      <Footer />
    </>
  );
}

export default App;
