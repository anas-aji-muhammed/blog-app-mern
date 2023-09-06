import React, { useState }  from 'react'
import styles from './CreateBlogPage.module.scss'
import ReactQuill from 'react-quill';
import { FaArrowLeftLong } from "react-icons/fa6";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { baseUrl, fetchRequestOption } from '../../../utils/network_utils';

export default function CreateBlogPage() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState('');
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');


    function handleSelectedCategoryChange(event)  {
    console.log('handleSelectedCategoryChange -', selectedCategory);
    console.log('event.target.value -', event.target.value);

    setSelectedCategory(event.target.value);
    console.log('handleSelectedCategoryChange -', selectedCategory);

  };

    function handleOnBlogCreate(event){
      event.preventDefault();
      const formData = new FormData();
      formData.set('title', title);
      formData.set('category', selectedCategory);
      formData.set('summary', summary);
      formData.set('content', content);
      formData.set('imageFile', imageFile[0]);
      console.log('handleOnBlogCreate called formData -', formData);
      fetch(baseUrl + '/createBlog', 
      {
        method: 'POST',
        credentials: 'include',
        body: formData
      }
      ).then(response=>{
        console.log(response);
        if(response.ok){
          navigate('/', {replace:true})
          alert("Blog Added Successfully")
        }
        else{
          alert("Failed to add Blog. Please try again later")

        }
      })
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
      <input type="text" placeholder='Enter Title' value={title} onChange={event=>setTitle(event.target.value)}></input>
      <label>Category</label>
      <select name="category" className={styles.categoryInput}  value={selectedCategory} onChange={(event)=>handleSelectedCategoryChange(event)}>
        <option value="Leadership">Leadership</option>
        <option value="Productivity">Productivity</option>
        <option value="Management">Management</option>
      </select>
      <label>Summary</label>
      <input type="text" placeholder='Enter Summary' value={summary} onChange={event=>setSummary(event.target.value)}></input>
      <label>Cover Image</label>
      <input placeholder='Upload Image' type='file' accept="image/*" onChange={event=>setImageFile(event.target.files)} ></input>
      <ReactQuill theme="snow" value={content} onChange={newContent=>setContent(newContent)} className={styles.textEditor}/>;

    </div>
    <button className={styles.createBlogButton} onClick={(event)=>handleOnBlogCreate(event)}>Create Blog</button>


    </section>
  )
}
