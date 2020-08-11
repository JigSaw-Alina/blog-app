import React from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import BlogForm from './BlogForm';
import { startEditinforation, startRemoveinforamtion } from '../actions/informations';




class EditBlogPage extends React.Component {

  onSubmit = (information) => {
    this.props.startEditinforation(this.props.information.id, information)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.startRemoveinforamtion({ id: this.props.information.id })
    this.props.history.push('/')
  }

   render() {
     return (
      <div>
        <div className="page__header">
          <div className="content__container">
            <h1>Edit BlogPost</h1>
          </div>
        </div>
        <div className="content__container">
        <BlogForm 
          information={this.props.information}
          onSubmit={this.onSubmit}
        />
        <div className="content__container">
        <div className="move_delete_btn">
          <button className="delete__btn" onClick={this.onRemove} ><MdDelete /></button>
        </div>
        </div>
        </div>
      </div>
     );
   }
}

const mapStateToProps = (state, props) => ({
  information: state.informations.find((informationData) =>  informationData.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditinforation: (id, information) => dispatch(startEditinforation(id, information)),
  startRemoveinforamtion: (id) => dispatch(startRemoveinforamtion(id))
});




export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);