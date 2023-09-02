import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './BlogDetails.module.scss'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BlogDetails() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  return (
    <main className={styles.blogDetailsPage}>
      <div className={styles.blogDetailsPageContainer} >
        <button onClick={()=>navigate(-1)} id={styles.backButton}><FaArrowLeftLong className={styles.reactIcons}/></button>

        <img src={data.blogCoverUrl}/>
        <h1>{data.blogTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: data.blogContent}}></div>


      </div>
      </main>
  )
}
