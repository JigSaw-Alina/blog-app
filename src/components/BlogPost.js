import React from 'react'
import { connect } from 'react-redux';
import BlogItems from './BlogItems'
import selectedInformation from '../selectors/information';
import BlogListFilters from './BlogListFilters';



const BlogPost = ({ information }) => (
  <div>
    <section className="content__container" id="post">
        <div className="container">
          <div className="podcaster">
           <h3 className="popular_pod">POPULAR PODCASTER</h3>
            <div className="box">
              <div className="image"><img src="/images/p_icon_1.gif" /></div>
              <div className="text">
                  <h4>Artist 1</h4>
                  <p>32, 420 Podcasts</p>
              </div>
            </div>
            <div className="box">
              <div className="image"><img src="/images/p_icon_2.gif" /></div>
              <div className="text">
                  <h4>Artist 2</h4>
                  <p>12, 381 Podcasts</p>
              </div>
            </div>
            <div className="box">
              <div className="image"><img src="/images/p_icon_3.gif" /></div>
              <div className="text">
                  <h4>Artist 3</h4>
                  <p>9, 291 Podcasts</p>
              </div>
            </div>
            <div className="box">
              <div className="image"><img src="/images/p_icon_4.gif" /></div>
              <div className="text">
                  <h4>Artist 4</h4>
                  <p>3, 420 Podcasts</p>
              </div>
            </div>
            <div className="box">
              <div className="image"><img src="/images/p_icon_5.gif" /></div>
              <div className="text">
                  <h4>Artist 5</h4>
                  <p>1, 520 Podcasts</p>
              </div>
            </div>
          </div>
          <div className="blog_post">
            <div>
            <BlogListFilters />
              {
                information.length === 0 ? (
                  <span>NO POST</span>
                ) : (
                  information.map((data) => {
                    return <BlogItems key={data.id} {...data} /> 
                  })
                )
              }
            </div>
          </div>
        </div>
    </section>
  </div>
);

const mapStateToProps = (state) => ({
  information: selectedInformation(state.informations, state.filters),
});


export default connect(mapStateToProps)(BlogPost)
