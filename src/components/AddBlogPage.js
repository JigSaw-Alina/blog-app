import React from 'react'
import { connect } from 'react-redux';
import { startAddInformation } from '../actions/informations';
import BlogForm from './BlogForm';




class AddBlogPage extends React.Component {
  onSubmit = (information) => {
    this.props.startAddInformation(information)
    this.props.history.push('/')
  };
  render () {
    return (
     <div>
       <div className="page__header">
         <div className="content__container">
          <h1>Add BlogPost</h1>
         </div>
       </div>
       <div className="content__container">
        <BlogForm 
          onSubmit={this.onSubmit}
        />
      </div>
     </div>
    )
  }
};


const mapDispatchToProps = (dispatch) => ({
  startAddInformation: (information) => dispatch(startAddInformation(information))
});

export default connect(undefined, mapDispatchToProps)(AddBlogPage);