import React from 'react'
import { connect } from 'react-redux';
import BlogItems from './BlogItems'
import selectedInformation from '../selectors/information';




const BlogPost = ({ information }) => (
  <div>
    <h2>BlogPost</h2>
    {information.map((data) => {
      return <BlogItems key={data.id} {...data} /> 
    })}
  </div>
);

const mapStateToProps = (state) => ({
  information: selectedInformation(state.information, state.filters)
});


export default connect(mapStateToProps)(BlogPost)


