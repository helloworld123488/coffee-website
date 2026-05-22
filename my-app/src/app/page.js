import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import About_us from './pages/about-us/page.js';
import Product from './pages/product/page.js';
import Feedback from "./components/feedback/feedback.js";
import Buynow from "./pages/buy-now/page";
import Contactus from './pages/contact-us/page.js';

export default function Home() {
  return (
    <div className={styles['app']}>
      <Navbar/>
      <Header/>
      <Product/>
      <About_us/>
      <Feedback/>
      <Buynow/>
      <Contactus/>
    </div>
  );
}
