import React from 'react';
import NavBar from "../navbar/NavBar";
import SubscriptionSection from "./components/subscribe/SubscriptionSection";
import RecentBlogSection from "../blog/recentBlogsSection/RecentBlogSection";
import AllBlogSection from "../blog/allBlogsGridSection/AllBlogSection";
import Footer from "../../utils/componenets/Footer/Footer"

function HomePage(props) {
    return (
        <>
            <header>
    
            </header>

            <main>
                <NavBar/>
                <SubscriptionSection/>
                {/*<RecentBlogSection/>*/}
                <AllBlogSection/>
            </main>
            <Footer/>
        </>

    );
}

export default HomePage;