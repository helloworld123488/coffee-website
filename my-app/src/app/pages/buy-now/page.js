import React from "react";
import styles from './buy-now.module.css';
import { assets } from '../../../../public/assets/assets';

const Buynow=()=>{
    return(
        <div className={styles['buynow-section']}> 
            <h1>Buynow</h1>
                <div className={styles['buynow-cards']}>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Espresso_coffee.src}
                            width={300}
                            height={100}
                            alt="Espresso roast"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Espresso Roast</h2>
                            </div>
                            <button>Order Now ₹177</button>
                        </div>    
                    </div>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Cold_brew_coffee.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Cold Brew Blend </h2>
                            </div>
                            <button>Order Now ₹284</button>
                        </div>    
                    </div>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Hazelnut_coffee.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Hazelnut Coffee</h2>
                            </div>
                            <button>Order Now ₹149</button>
                        </div>    
                    </div>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Arabica_single_origin.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Arabica Single Origin </h2>
                            </div>
                            <button>Order Now ₹540</button>
                        </div>    
                    </div>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Mocha_blend.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Mocha Blend </h2>
                                <button>Order Now ₹149</button>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['buynow-image-card']}>
                        <img
                            src={assets.Organic_filter.src}
                            alt="Organic filter coffee"
                        />
                        <div className={styles['buynow-content']}>
                            <div className={styles['card-title']}>
                                <h2>Organic Filter Coffee  </h2>
                            </div>
                            <button>Order Now ₹290</button>
                        </div>    
                    </div>
                </div>
        </div>
    );
}

export default Buynow;