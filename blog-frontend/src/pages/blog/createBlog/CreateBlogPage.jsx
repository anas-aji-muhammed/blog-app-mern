import React, { useState }  from 'react'
import styles from './CreateBlogPage.module.scss'
import ReactQuill from 'react-quill';
import { FaArrowLeftLong } from "react-icons/fa6";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

export default function CreateBlogPage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    function handleOnBlogCreate(event){
      event.preventDefault();
      console.log("Data Added - " + value)
    }


  return (
    <section className={styles.createBlogPageSection}>
    <div className={styles.titleBar}>
      <button onClick={()=>navigate(-1)} id={styles.backButton}><FaArrowLeftLong className={styles.reactIcons}/></button>
      <h1>Create Bog</h1>
      <h1></h1>

    </div>
    <div className={styles.createBlogPageContainer}>
        <label>Title</label>
      <input type="text" placeholder='Enter Title'></input>
      <label>Summary</label>
      <input placeholder='Enter Summary'></input>
      <label>Cover Image</label>
      <input placeholder='Upload Image' type='file'></input>
      <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.textEditor}/>;

    </div>
    <button className={styles.createBlogButton} onClick={(event)=>handleOnBlogCreate(event)}>Create Blog</button>


    </section>
  )
}
