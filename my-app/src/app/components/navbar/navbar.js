'use client';
import styles from './navbar.module.css';
import { useState } from 'react';
import { assets } from '../../../../public/assets/assets.js';
import Image from 'next/image';
// adding import for buy now button to work
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  // buy button to work
  const router = useRouter(); 

  const [menu, setMenu] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Image
        src={assets.coffee_logo}
        alt="Logo"
        className={styles['navbar-logo']}
        loading="eager"
      />

      {/* Hamburger (moved to right side) */}
      <div className={styles['navbar-right']}>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu */}
      <ul className={`${styles['navbar-menu']} ${isOpen ? styles.open : ''}`}>
        <li onClick={() => setMenu('home')} className={menu === 'home' ? styles.active : ''}>Home</li>
        <li onClick={() => setMenu('menu')} className={menu === 'menu' ? styles.active : ''}><Link href='/pages/product'>Menu</Link></li>
        <li onClick={() => setMenu('about-us')} className={menu === 'about-us' ? styles.active : ''}><Link href='/pages/about-us'>About Us</Link></li>
        <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? styles.active : ''}><Link href='/pages/contact-us'>Contact Us</Link></li>
        {/* Order Now inside dropdown */}
        <li>
          <button className={styles['buy-btn']} onClick={() => router.push('/pages/buy-now')}>Buy Now</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
