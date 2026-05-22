
import React from 'react';
import styles from './product.module.css';
import { assets } from '../../../../public/assets/assets';
import {dancing_script} from '../../components/fonts/fonts.js';

const Product=()=>{
    return(
        <div className={styles['product-section']}>
            <h1 className={dancing_script.className}>Discover the perfect product brew for every mood</h1>
            <div>
                <div className={styles['product-cards']}>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Espresso_coffee.src}
                            width={300}
                            height={100}
                            alt="Espresso roast"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Espresso Roast</h2>
                            </div>
                            <div className={styles['card-description']}>
                                <p>Bold, intense, and perfect for espresso lovers. Rich crema and deep flavor.</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Cold_brew_coffee.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Cold Brew Blend </h2>
                            </div>
                            <div className={styles['card-description']}>                            
                                <p>Bold, intense, and perfect for espresso lovers. Rich crema and deep flavor.</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Hazelnut_coffee.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Hazelnut Flavored Coffee</h2>
                            </div>
                            <div className={styles['card-description']}>
                                <p>Nutty, aromatic, and a favorite among flavored coffee drinkers.</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Arabica_single_origin.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Arabica Single Origin </h2>
                            </div>
                            <div className={styles['card-description']}>
                                <p>Premium beans from a single farm/region, highlighting unique terroir notes.</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Mocha_blend.src}
                            alt="cold brew coffee"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Mocha Blend </h2>
                            </div>
                            <div className={styles['card-description']}>
                            <p>Chocolatey undertones with a balanced roast — indulgent and comforting.</p>
                            </div>
                        </div>    
                    </div>
                    <div className={styles['product-image-card']}>
                        <img
                            src={assets.Organic_filter.src}
                            alt="Organic filter coffee"
                        />
                        <div className={styles['product-content']}>
                            <div className={styles['card-title']}>
                                <h2>Organic Filter Coffee  </h2>
                            </div>
                            <div className={styles['card-description']}>
                                <p>Classic South Indian filter coffee, organic beans for a traditional experience.</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;