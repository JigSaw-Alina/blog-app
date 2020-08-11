import React from 'react';
import BlogPost from './BlogPost';
import BlogMainPage from './BlogMainPage';
import FeaturedGuests from './FeaturedGuests';
import Subscribe from './Subscribe';
import Footer from './Login_components/Footer';


const BlogAppDashboard = () => (
   <div>
     <BlogMainPage />
     <BlogPost />
     <FeaturedGuests />
     <Subscribe />
     <Footer />
   </div> 
);

export default BlogAppDashboard;
