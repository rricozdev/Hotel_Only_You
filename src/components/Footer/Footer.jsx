import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const whatsappNumber = "573013256597";
  const facebookUrl = "https://www.facebook.com/YaYeYaKeHa";
  const email = "HotelOnlyYou77@outlook.com"

  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>

        <a className={styles.footerIcon} href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>

        {/* <a className={styles.footerIcon}>
          <FaInstagram />
        </a> */}
        {/* <a className={styles.footerIcon}>
          <FaYoutube />
        </a> */}
        {/* <a className={styles.footerIcon}>
          <FaXTwitter />
        </a> */}
        <a className={styles.footerIcon} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a className={styles.footerIcon} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <p className={styles.footerText}>www.hotelonlyou.com <br /><span style={{fontSize: "0.8em"}}>2024</span> </p>
      <a className={styles.designby} href='https://www.linkedin.com/in/ricardo-ricoz/' target="_blank">design by rricozdev</a>
    </footer>
  );
};

export default Footer;
