import React from 'react';
import styles from './RecentBlogSection.module.scss'
import BlogGridItem from "../components/blogGridItem/BlogGridItem";

function RecentBlogSection(props) {
    return (
        <section className={styles.recentBlogSection}>
            <h1>Recent Blog Posts</h1>
            <div className={styles.recentBlogsGrid}>
                <BlogGridItem/>
                <div className={styles.recentBlogSectionBlogColumn}>
                    <BlogGridItem/>
                    <BlogGridItem/>
                </div>
            </div>

        </section>
    );
}

export default RecentBlogSection;