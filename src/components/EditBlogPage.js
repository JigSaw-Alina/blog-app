import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { editInfomation, removeInformation } from '../actions/informations';




class EditBlogPage extends React.Component {

  onSubmit = (information) => {
    this.props.editInfomation(this.props.information.id, information)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.removeInformation({ id: this.props.information.id })
    this.props.history.push('/')
  }

   render() {
     return (
      <div>
        <BlogForm 
          information={this.props.information}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove} >Remove</button>
      </div>
     );
   }
}

const mapStateToProps = (state, props) => ({
  information: state.information.find((informationData) =>  informationData.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch, props) => ({
  editInfomation: (id, information) => dispatch(editInfomation(id, information)),
  removeInformation: (data) => dispatch(removeInformation(data))
});




export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);