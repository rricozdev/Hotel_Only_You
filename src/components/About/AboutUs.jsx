import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AboutUs.module.css"; // Importa los estilos CSS modulares
import img1 from "./image-1.jpg"; // Importa la primera imagen
import img2 from "./image-2-2.jpg"; // Importa la segunda imagen
import img3 from "./image-3-3.jpg"; // Importa la tercera imagen
import img4 from "./image-4-4.jpg"; // Importa la cuarta imagen
import img5 from "./image-5-5.jpg"; 

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer} id='#quienes somos'>
       <h1 className={styles.title}>
         Quienes <span className={styles.stroke_text}>somos</span>
       </h1>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Image 1" className={styles.image} />
        </div>
        <div>
          <img src={img2} alt="Image 2" className={styles.image} />
        </div>
        <div>
          <img src={img3} alt="Image 3" className={styles.image} />
        </div>
        <div>
          <img src={img4} alt="Image 4" className={styles.image} />
        </div>
        <div>
          <img src={img5} alt="Image 5" className={styles.image} />
        </div>

       
        {/* Agrega las imágenes restantes aquí */}
      </Slider>
      <p className={styles.description}>
      Te ofrecemos una experiencia única. Nos destacamos por nuestro servicio personalizado y un ambiente acogedor, donde cada detalle está pensado para hacerte sentir como en casa. Ven y descubre la calidez y el encanto de nuestro hotel, donde la atención al detalle y la comodidad se encuentran en perfecta armonía.
       </p>
    </div>
  );
}

export default AutoPlay;
