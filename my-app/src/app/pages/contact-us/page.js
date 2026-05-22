import React from 'react';
import styles from './contact-us.module.css';

const Contactus=()=>{
    return(
        <div className={styles['contactus-section']}>
            <div className={styles["contact-container"]}>
                <h2>Contact Us</h2>
                <form className={styles["contact-form"]}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contactus;