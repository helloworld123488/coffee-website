import React from "react";
import styles from './feedback.module.css';

const Feedback=()=>{
    return(
        <div>
            <section className={styles['feedback']}>
                <h2>Customer Feedback</h2>
                <div className={styles["feedback-list"]}>
                    <blockquote>
                    “The cappuccino was rich and smooth — best I’ve had in town!”
                    <footer>— Priya</footer>
                    </blockquote>
                    <blockquote>
                    “Love the cozy atmosphere. Perfect spot to relax with a latte.”
                    <footer>— Arjun</footer>
                    </blockquote>
                    <blockquote>
                    “Friendly staff and amazing cold brew. Highly recommend!”
                    <footer>— Meera</footer>
                    </blockquote>
                </div>
            </section>


        </div>
    );
}

export default Feedback;