

import React from 'react';
import Image from 'next/image';   // this line is import to use image element <image/>
import styles from './about-us.module.css'

// importing dancing script font
import { dancing_script } from '../../components/fonts/fonts.js';

const About_us=()=>{
    return(
        <div className={styles['about-us']}>
            <h1>About Us</h1>
            <br></br><br></br>
            <div className={styles['about-us-flex']}>
                <Image 
                    src='/about-coffeeshop.png'
                    alt="A cozy view of our coffee shop interior"
                    width={600}
                    height={300}
                    loading="eager"
                />
                <div className={`${styles['about-us-content']} ${dancing_script.className}`}>
                    <p>"At Brew Haven, coffee isn’t just a drink — it’s an experience. Born from a love of rich flavors and cozy spaces, we set out to create a café where every cup tells a story. Our beans are sourced from ethical farms, roasted with care, and brewed to perfection. Whether you’re here for your morning espresso, a quiet study session, or to catch up with friends, we’re proud to be part of your daily ritual. Welcome to our family — one sip at a time." </p>
                </div>
            </div>
            
            
        </div>
    );
};

export default About_us;