import React from 'react';
import styles from './SubscriptionPage.module.scss'

function SubscriptionSection(props) {
    function handleSubmission(event, type){
        if(type==1)alert("Subscription Success \n Don't worry no mail is send to you.");
        else alert("Your data is safe with us.");
    }

    return (
        <section className={styles.subscriptionSection}>
            <p>Our Blog</p>
            <h1>Stories and interviews</h1>
            <p className={styles.subTitle}>Subscribe to learn about new product features,
                the latest in technology, solutions, and updates.</p>
            <form className={styles.emailSubscribeForm} onSubmit={(event)=>handleSubmission(event, 1)}>
                <input type="email" id="emailId" name="Email"/>
                <button className={styles.subscribeEmailButton} type='submit'>Subscribe</button>
            </form>
            <p className={styles.privacyPolicy}>We care about your data in our <span onClick={(event)=>handleSubmission(event, 2)}>privacy policy.</span></p>

        </section>
    );
}

export default SubscriptionSection;