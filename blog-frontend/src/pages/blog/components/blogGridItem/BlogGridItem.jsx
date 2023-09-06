import React from 'react';
import styles from './BlogGridItem.module.scss'
import ChipComponent from "../../../../utils/componenets/ChipComponent/ChipComponent";
import WrapContainer from "../../../../utils/componenets/WrapComponent/WrapContainer";
import { useNavigate } from 'react-router-dom';

function  BlogGridItem(props) {
    const blog = props.blog;
    const navigate = useNavigate();

    function goToBlogDetails(event){
        event.preventDefault();
        navigate('/blogDetails', {state:blog})

    }

    return (
        <div className={styles.blogGridItemContainer} onClick={ev=>goToBlogDetails(ev)}>
            <img alt="blogGridImage" className={styles.blogGridImage} src={blog.blogCoverUrl}/>
            <p className={styles.authorAndDate}>Olivia Rhye • 20 Jan 2024</p>
            <h2 className={styles.blogTitle}>{blog.blogTitle}</h2>
            <p className={styles.blogSubTitle}>{blog.blogSummary}</p>
            <WrapContainer>
                <ChipComponent color="105, 65, 198" title="Leadership" />
                <ChipComponent color="100, 200, 150" title="Teamwork" />
                <ChipComponent color="105, 65, 198" title="Leadership" />
                
  
            </WrapContainer>
            
            

        </div>
    );
}

export default BlogGridItem;