import React from 'react';
import styles from './SubscriptionPage.module.scss'

function SubscriptionSection(props) {
    return (
        <section className={styles.subscriptionSection}>
            <p>Our Blog</p>
            <h1>Stories and interviews</h1>
            <p className={styles.subTitle}>Subscribe to learn about new product features,
                the latest in technology, solutions, and updates.</p>
            <form className={styles.emailSubscribeForm}>
                <input type="email" id="emailId" name="Email"/>
                <button className={styles.subscribeEmailButton}>Subscribe</button>
            </form>
            <p className={styles.privacyPolicy}>We care about your data in our <span>privacy policy.</span></p>

        </section>
    );
}

export default SubscriptionSection;