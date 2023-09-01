import React from 'react';
import styles from './BlogGridItem.module.scss'
import ChipComponent from "../../../../utils/componenets/ChipComponent/ChipComponent";
import WrapContainer from "../../../../utils/componenets/WrapComponent/WrapContainer";

function BlogGridItem(props) {
    return (
        <div className={styles.blogGridItemContainer}>
            <img alt="blogGridImage" className={styles.blogGridImage} src="https://picsum.photos/300/400"/>
            <p className={styles.authorAndDate}>Olivia Rhye • 20 Jan 2024</p>
            <h2 className={styles.blogTitle}>UX review presentations</h2>
            <p className={styles.blogSubTitle}>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <WrapContainer>
                <ChipComponent color="105, 65, 198" title="Leadership" />
                <ChipComponent color="100, 200, 150" title="Teamwork" />
                <ChipComponent color="105, 65, 198" title="Leadership" />
                
  
            </WrapContainer>
            
            

        </div>
    );
}

export default BlogGridItem;