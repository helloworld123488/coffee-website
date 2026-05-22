import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image'

const Footer=()=>{
    return(
        <div>
            <footer style={{ textAlign: "center", padding: "1rem", background: "#222", color: "#fff" }}>
                <p>
                    © {new Date().getFullYear()} Brew Haven | Follow me on{" "}
                    <a href="https://www.instagram.com/jerin_dauntless/" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                    </a> //
                    <a href="https://github.com/helloworld123488" target="_blank" rel="noopener noreferrer">
                         <Image src="/github.png" alt="Instagram" width={20} height={20} />
                    </a> //
                    <a href="https://helloworld123488.github.io/jerin-portfolio/" target="_blank" rel="noopener noreferrer">
                        <b> Portfolio</b>
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;