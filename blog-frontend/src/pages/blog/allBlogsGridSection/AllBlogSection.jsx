import React from 'react';
import styles from "./AllBlogSection.module.scss";
import BlogGridItem from "../components/blogGridItem/BlogGridItem";
import PaginationBottomBar from "../components/paginationBottomBar/paginationBottomBar"

function AllBlogSection(props) {
    return (
        <section className={styles.allBlogSection}>
            <h1>All Blog Posts</h1>
            <div className={styles.allBlogsGrid}>
                <BlogGridItem/>
                <BlogGridItem/>
                <BlogGridItem/>
                <BlogGridItem/>
                <BlogGridItem/>
                <BlogGridItem/>

            </div>
            <PaginationBottomBar/>

        </section>
    );
}

export default AllBlogSection;