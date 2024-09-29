import React, { useState, useEffect } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import styles from './FloatingButton.module.css';

const FloatingButton = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showArrow && (
        <button className={styles.arrowButton} onClick={handleScrollTop}>
          <IoIosArrowDropup className={styles.arrow} />
        </button>
      )}
    </div>
  );
};

export default FloatingButton;
