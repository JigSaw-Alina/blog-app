import React from 'react'
import { Link } from 'react-router-dom';


const BlogMainPage = () => (
    <div>
      <section className="container_section" id="home">
        <div className="content_main">
          <div>
              <h1 className="content_first"><span>Tell Your</span></h1>
              <h1 className="content_first"><span>Story</span> to</h1> 
              <h1 className="content_first">the World</h1>
              <h1 className="content_second"><span>Tell Your Story</span> to the World</h1>
              <p className="sub_content__second">Join with us!, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ex!</p>
              <p className="sub_content__first">Join with us!, Lorem ipsum</p>
              <p className="sub_content__first">dolor sit amet, consectetur adipisicing elit.</p>
              <p className="sub_content__first">Delectus, ex!</p>
          <Link to="/create" className="create_blog_one">
            <span>
              <img className="create_post__icon_one" src="/images/logo.gif"/>
              Create Post<span className="sub_text">.</span>
            </span>
          </Link>
          </div>
          <div>
              <img src="/images/main_bg.svg" />
          </div>
          <Link to="/create" className="create_blog_two">
          <span>
            <img className="create_post__icon_two" src="/images/logo.gif"/>
            Create Post<span className="sub_text">.</span>
          </span>
        </Link>
        </div>
      </section>
    </div>
);

export default BlogMainPage

