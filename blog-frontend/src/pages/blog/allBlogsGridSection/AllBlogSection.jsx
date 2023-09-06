import React, { useEffect, useState } from 'react';
import styles from "./AllBlogSection.module.scss";
import BlogGridItem from "../components/blogGridItem/BlogGridItem";
import PaginationBottomBar from "../components/paginationBottomBar/paginationBottomBar"
import { baseUrl } from '../../../utils/network_utils';

function AllBlogSection(props) {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(()=>{
        fetch(baseUrl + '/getAllBlogs',{
            method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }).then(response=>response.json())
        .then(responseData => {
            setAllBlogs(responseData.data); // Updating state - all blogs
          })
          .catch(error => console.error('Error fetching data:', error));
    }
    ,[])
    return (
        <section className={styles.allBlogSection}>
            <h1>All Blog Posts</h1>
            <div className={styles.allBlogsGrid}>
            {allBlogs.map((blog,index)=>
                (<BlogGridItem key={index} blog={blog}/>)
            )}

            </div>
            {/* <PaginationBottomBar/> */}

        </section>
    );
}

export default AllBlogSection;