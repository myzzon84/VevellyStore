import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';
import arrUp from '../../assets/icons/arrUp.svg';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      className={`${styles.scrollToTopButton} ${isVisible ? styles.show : ''} max-1000px:scale-[.85] max-550px:scale-[.65]`}
      onClick={scrollToTop}
    >
      <img src={arrUp} alt="Scroll to top" className={``} />
    </button>
  );
};

export default ScrollToTopButton;
