'use client';
import Image from 'next/image';
import React from 'react';
import styles from './header.module.css';
import {useRouter} from 'next/navigation';

const Header=()=>{
    const router = useRouter();
    return(
        <div className={styles['header']}>
            <div className={styles['header-content']}>
                <h2>Start your day with perfect brew</h2>
                <p><em>Crafted with care,served with love</em></p>
                <div className={styles['header-button']}>
                    <button onClick={()=>{router.push('pages/buy-now')}}>Buy now</button>
                    <button onClick={()=>{router.push('/pages/product')}}>Explore more</button> 
                </div>
            </div>
        </div>
    );
};

export default Header;