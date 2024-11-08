import { useEffect } from 'react';
import '../styles/globals.css';
import '../../public/fonts/stylesheet.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
